import { NgModule } from "@angular/core";
import { MsalService, MSAL_CONFIG } from "./msal.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { MsalInterceptor } from './msal.interceptor';
import { MsalGuard } from "./msal.guard";
export class MsalModule {
    static forRoot(config) {
        return {
            ngModule: MsalModule,
            providers: [
                { provide: MSAL_CONFIG, useValue: config },
                MsalService,
                { provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true }
            ]
        };
    }
}
MsalModule.decorators = [
    { type: NgModule, args: [{
                providers: [MsalGuard]
            },] },
];
/** @nocollapse */
MsalModule.ctorParameters = () => [];
//# sourceMappingURL=msal.module.js.map