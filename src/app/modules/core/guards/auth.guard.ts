import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state): boolean | UrlTree => {
  const authService = inject(AuthService);
  const router = inject(Router);

 if (authService.loggedIn()) {
    return true;
  } else {
    return router.createUrlTree(['/auth'], { queryParams: { returnUrl: state.url } });
  }
};
