import { Injectable } from '@angular/core';
import { MsalService } from './msal.service';
export class MsalGuard {
    constructor(msalService) {
        this.msalService = msalService;
    }
    canActivate(next, state) {
        return this.msalService.authenticated;
    }
}
MsalGuard.decorators = [
    { type: Injectable },
];
/** @nocollapse */
MsalGuard.ctorParameters = () => [
    { type: MsalService, },
];
//# sourceMappingURL=msal.guard.js.map