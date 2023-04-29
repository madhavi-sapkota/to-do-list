import {
  HttpErrorResponse,
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenAuthorizationService implements HttpInterceptor {
  constructor(private cookieService: CookieService, private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let bearerToken = this.cookieService.get('bearer-token');
    if (bearerToken) {
      const modifiedRequest = req.clone({
        setHeaders: {
          Authorization: bearerToken,
        },
      });

      return next.handle(modifiedRequest).pipe(
        tap({
          error: (err) => {
            if (err instanceof HttpErrorResponse) {
              if (err.status !== 401) {
                return;
              }
              this.router.navigate(['login']);
            }
          },
        })
      );
    } else {
      this.router.navigate(['login']);
      return next.handle(req);
    }
  }
}
