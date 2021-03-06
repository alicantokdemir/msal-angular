import { tokenReceivedCallback } from 'msal/lib-commonjs/UserAgentApplication';
export declare class MsalConfig {
    clientID: string;
    graphScopes: string[];
    signUpSignInPolicy?: string;
    tenant?: string;
    popup?: boolean;
    navigateToLoginRequestUrl?: boolean;
    redirectUrl?: string;
    callback?: tokenReceivedCallback;
    cacheLocation?: string;
}
