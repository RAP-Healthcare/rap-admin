import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { signatureHeader } from '@xaphira/shared';
import { AuthSignatureService } from './auth-signature.service';

@Injectable()
export class HttpInterceptorSignatureService implements HttpInterceptor, OnDestroy {

    constructor(private authSignature: AuthSignatureService) {}

    private destroy$: Subject<any> = new Subject<any>();

    ngOnDestroy(): void {
      this.destroy$.next(true);
      this.destroy$.complete();
      this.destroy$.unsubscribe();
    }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.headers) {
            if (req.headers.has(signatureHeader.mark)) {
                return this.authSignature.signHeaders(req).pipe(switchMap((value: HttpRequest<any>) => {
                    return next.handle(value);
                }));
            }
        }
        return next.handle(req).takeUntil(this.destroy$);
    }

}
