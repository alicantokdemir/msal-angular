import { Injectable } from '@angular/core';
import { MsalService } from './msal.service';
var MsalGuard = /** @class */ (function () {
    function MsalGuard(msalService) {
        this.msalService = msalService;
    }
    MsalGuard.prototype.canActivate = function (next, state) {
        return this.msalService.authenticated;
    };
    MsalGuard.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    MsalGuard.ctorParameters = function () { return [
        { type: MsalService, },
    ]; };
    return MsalGuard;
}());
export { MsalGuard };
//# sourceMappingURL=msal.guard.js.map