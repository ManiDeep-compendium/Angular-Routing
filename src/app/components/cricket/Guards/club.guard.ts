import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChildFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

export const clubGuard: CanActivateChildFn = (childRoute: ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean | UrlTree => {
  return inject(Router).createUrlTree(["/test"],{queryParams:{returnFrom:state.url}})
};
