import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean | UrlTree => {
  const isRegisteredAthlete = false;
  const router = inject(Router);

  console.log(route.url,'activated route snapshot');
  console.log(state.url,'RouterState Sapshot');
  console.log(state.root,'RouterState Sapshot');

  if(isRegisteredAthlete)  return true;

  return router.createUrlTree(
    ["/cricket-club"],
  );
  

};
