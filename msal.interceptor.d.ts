import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { MsalService } from './msal.service';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/mergeMap';
export declare class MsalInterceptor implements HttpInterceptor {
    private msalService;
    constructor(msalService: MsalService);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
