import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
import { AuthTokenService } from './auth-token.service';
import { Observable, Subject } from 'rxjs';
import { USER_INFO, UserInfo } from '@xaphira/shared';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private router: Router, private authTokenService: AuthTokenService,
        @Inject(USER_INFO) private authService: UserInfo) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        const result$: Subject<boolean> = new Subject<boolean>();
        this.authTokenService.isLogin().then((value: boolean) => {
            result$.next(value);
            if (!value) {
                this.router.navigate(['/auth']);
            } else {
                this.authService.loadPhotoUser();
            }
        });
        return result$.asObservable();
    }

}
