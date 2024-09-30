import { Injectable } from '@angular/core';
import { 
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest }
from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class Interceptor implements HttpInterceptor {
 intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    const authReq = request.clone({
        setHeaders: {
            "X-Test-Key": environment.testKeyValue,
        }
    });
    return next.handle(authReq);
 }
}