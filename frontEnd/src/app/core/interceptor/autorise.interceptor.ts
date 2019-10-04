import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable()
export class AutoriseInterceptor implements HttpInterceptor{
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
      }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            console.log(this.activatedRoute.snapshot);
            this.router.navigate(['ru/admin']);
          }
        }
      })
    );
  }
}
