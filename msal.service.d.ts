import { InjectionToken } from '@angular/core';
import { MsalConfig } from './msal-config';
export declare const MSAL_CONFIG: InjectionToken<string>;
export declare class MsalService {
    private config;
    error: string;
    user: any;
    private app;
    constructor(config: MsalConfig);
    getUser(): Promise<any>;
    readonly authenticated: Promise<boolean>;
    readonly token: Promise<string>;
    login(): any;
    getToken(): Promise<string>;
    logout(): void;
    loginPopup(): any;
    private loginRedirect();
    private getFullUrl(url);
    private origin();
}
