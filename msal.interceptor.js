import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MsalService } from './msal.service';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/mergeMap';
export class MsalInterceptor {
    constructor(msalService) {
        this.msalService = msalService;
    }
    intercept(req, next) {
        return Observable.fromPromise(this.msalService.getToken().then(token => {
            const JWT = `Bearer ${token}`;
            return req.clone({
                setHeaders: {
                    Authorization: JWT,
                },
            });
        })).mergeMap(r => next.handle(r));
    }
}
MsalInterceptor.decorators = [
    { type: Injectable },
];
/** @nocollapse */
MsalInterceptor.ctorParameters = () => [
    { type: MsalService, },
];
//# sourceMappingURL=msal.interceptor.js.map