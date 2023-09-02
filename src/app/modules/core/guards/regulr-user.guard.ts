import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { inject } from '@angular/core';

export const regulrUserGuard: CanActivateFn = (route, state): boolean | UrlTree => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.getUserModel()?.userType == 1 || authService.getUserModel()?.userType == 2) {
    return true;
  } else {
    return router.createUrlTree(['/'], {
      queryParams: { returnUrl: state.url },
    });
  }
};
