import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MsalService } from './msal.service';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/mergeMap';
var MsalInterceptor = /** @class */ (function () {
    function MsalInterceptor(msalService) {
        this.msalService = msalService;
    }
    MsalInterceptor.prototype.intercept = function (req, next) {
        return Observable.fromPromise(this.msalService.getToken().then(function (token) {
            var JWT = "Bearer " + token;
            return req.clone({
                setHeaders: {
                    Authorization: JWT,
                },
            });
        })).mergeMap(function (r) { return next.handle(r); });
    };
    MsalInterceptor.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    MsalInterceptor.ctorParameters = function () { return [
        { type: MsalService, },
    ]; };
    return MsalInterceptor;
}());
export { MsalInterceptor };
//# sourceMappingURL=msal.interceptor.js.map