import { Injectable, InjectionToken, Inject } from '@angular/core';
import { MsalConfig } from './msal-config';
export var MSAL_CONFIG = new InjectionToken('MSAL_CONFIG');
var MsalService = /** @class */ (function () {
    function MsalService(config) {
        this.config = config;
        var authority = (config.tenant && config.signUpSignInPolicy) ?
            "https://login.microsoftonline.com/tfp/" + config.tenant + "/" + config.signUpSignInPolicy : '';
        this.app = new Msal.UserAgentApplication(config.clientID, authority, config.callback, {
            navigateToLoginRequestUrl: this.config.navigateToLoginRequestUrl,
            redirectUri: this.config.redirectUrl || window.location.href,
            cacheLocation: this.config.cacheLocation || 'localStorage'
        });
    }
    MsalService.prototype.getUser = function () {
        var _this = this;
        return this.authenticated.then(function (isauthenticated) { return isauthenticated ? _this.app.getUser() : {}; });
    };
    Object.defineProperty(MsalService.prototype, "authenticated", {
        get: function () {
            return this.token.then(function (t) { return !!t; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MsalService.prototype, "token", {
        get: function () {
            return this.getToken();
        },
        enumerable: true,
        configurable: true
    });
    MsalService.prototype.login = function () {
        return this.config.popup ?
            this.loginPopup() :
            this.loginRedirect();
    };
    MsalService.prototype.getToken = function () {
        return this.app.acquireTokenSilent(this.config.graphScopes)
            .then(function (token) {
            return token;
        }).catch(function (error) {
            // return this.app.acquireTokenPopup(this.config.graphScopes)
            //   .then(token => {
            //     return Promise.resolve(token);
            //   }).catch(innererror => {
            //     return Promise.resolve('');
            //   });
            return Promise.resolve('');
        });
    };
    MsalService.prototype.logout = function () {
        this.user = null;
        this.app.logout();
    };
    MsalService.prototype.loginPopup = function () {
        var _this = this;
        return this.app.loginPopup(this.config.graphScopes).then(function (idToken) {
            _this.app.acquireTokenSilent(_this.config.graphScopes).then(function (token) {
                return Promise.resolve(token);
            }, function (error) {
                _this.app.acquireTokenPopup(_this.config.graphScopes).then(function (token) {
                    return Promise.resolve(token);
                }, function (innererror) {
                    console.log('Error acquiring the popup:\n' + innererror);
                    return Promise.resolve('');
                });
            });
        }, function (error) {
            console.log('Error during login:\n' + error);
            return Promise.resolve('');
        });
    };
    MsalService.prototype.loginRedirect = function () {
        this.app.loginRedirect(this.config.graphScopes);
    };
    MsalService.prototype.getFullUrl = function (url) {
        // this create a absolute url from a relative one.
        var pat = /^https?:\/\//i;
        return pat.test(url) ? url : this.origin() + url;
    };
    MsalService.prototype.origin = function () {
        return (window.location.origin) ? window.location.origin :
            window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
    };
    MsalService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    MsalService.ctorParameters = function () { return [
        { type: MsalConfig, decorators: [{ type: Inject, args: [MSAL_CONFIG,] },] },
    ]; };
    return MsalService;
}());
export { MsalService };
//# sourceMappingURL=msal.service.js.map