var MsalConfig = /** @class */ (function () {
    function MsalConfig() {
        this.popup = true;
        this.navigateToLoginRequestUrl = false;
        this.redirectUrl = window.location.href;
        this.callback = function (errorDesc, token, error, tokenType) {
            if (error) {
                console.error(error + " " + errorDesc);
            }
        };
    }
    return MsalConfig;
}());
export { MsalConfig };
//# sourceMappingURL=msal-config.js.map