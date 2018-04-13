import { InjectionToken } from '@angular/core';
import { MsalConfig } from './msal-config';
export declare const MSAL_CONFIG: InjectionToken<string>;
export declare class MsalService {
    private config;
    error: string;
    user: any;
    private app;
    constructor(config: MsalConfig);
    getUser(): Promise<{}>;
    readonly authenticated: Promise<boolean>;
    readonly token: Promise<string>;
    login(): Promise<string | void>;
    getToken(): Promise<string>;
    logout(): void;
    loginPopup(): Promise<string | void>;
    private loginRedirect();
    private getFullUrl(url);
    private origin();
}