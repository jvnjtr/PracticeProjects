import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';

import { inject } from '@angular/core';

import { catchError, switchMap, throwError } from 'rxjs';

import { UserService } from '../services/user-service';
import { Router } from '@angular/router';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(UserService);
  const router = inject(Router);
  // Browser automatically sends HttpOnly cookies
  const request = req.clone({
    withCredentials: true,
  });

  return next(request).pipe(
    catchError((err: HttpErrorResponse) => {
      // Do not refresh refresh-request itself
      if (err.status === 401 && !req.url.includes('/api/refresh')) {
        return auth.refreshToken().pipe(
          switchMap(() => {
            const retry = request.clone({
              withCredentials: true,
            });
            return next(retry);
          }),
          catchError((refreshErr) => {
            console.log('Refresh failed', refreshErr);
            alert('Session expired. Please login again.');
            auth.logout();
            router.navigate(['/login']);
            return throwError(() => refreshErr);
          }),
        );
      }
      return throwError(() => err);
    }),
  );
};
