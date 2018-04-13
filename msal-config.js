export class MsalConfig {
    constructor() {
        this.popup = true;
        this.navigateToLoginRequestUrl = false;
        this.redirectUrl = window.location.href;
        this.callback = (errorDesc, token, error, tokenType) => {
            if (error) {
                console.error(`${error} ${errorDesc}`);
            }
        };
    }
}
//# sourceMappingURL=msal-config.js.map