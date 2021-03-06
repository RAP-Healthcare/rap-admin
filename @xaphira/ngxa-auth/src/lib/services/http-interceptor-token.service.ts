import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { signatureHeader } from '@xaphira/shared';
import { AuthTokenService } from './auth-token.service';

@Injectable()
export class HttpInterceptorTokenService implements HttpInterceptor, OnDestroy {

    constructor(private authToken: AuthTokenService) {}

    private destroy$: Subject<any> = new Subject<any>();

    ngOnDestroy(): void {
      this.destroy$.next(true);
      this.destroy$.complete();
      this.destroy$.unsubscribe();
    }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.headers) {
            if (req.headers.has(signatureHeader.mark)) {
                return this.authToken.oauthHeaders(req).pipe(switchMap((reqAuth: any) => {
                    return next.handle(reqAuth);
                }));
            }
        }
        return next.handle(req).takeUntil(this.destroy$);
    }

}
