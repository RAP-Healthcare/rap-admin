import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Injectable } from '@angular/core';
import { EncryptionService } from '@xaphira/utils';
import { AuthTokenService } from './auth-token.service';
import { AuthIndexedDBService } from '../storage/auth-indexeddb.service';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class AuthGuardChildService implements CanActivateChild {
    constructor(
        private router: Router,
        private authTokenService: AuthTokenService,
        private enc: EncryptionService,
        private storage: AuthIndexedDBService) {}

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        const result$: Subject<boolean> = new Subject<boolean>();
        this.authTokenService.isLogin().then((value: boolean) => {
            result$.next(value);
            if (route.data) {
                Promise.all([
                    this.storage.getEnc('menus'),
                    this.storage.getEnc('extras'),
                ]).then((strg: string[]) => {
                    if (!(strg[0].includes(route.data['code']) || strg[1].includes(route.data['code']))) {
                        this.router.navigate(['/app/home']);
                    }
                    return result$.asObservable();
                });
            }
            if (!value) {
                this.router.navigate(['/auth']);
            }
        });
        return result$.asObservable();
    }

}
