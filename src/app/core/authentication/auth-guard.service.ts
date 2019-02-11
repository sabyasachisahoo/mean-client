import { Injectable } from '@angular/core';
import { Router, CanActivate, CanLoad } from '@angular/router';

import { AuthenticationService } from './authentication.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthenticationService, private router: Router) { }

  checkLogin(url: string): boolean {
    if (this.auth.isLoggedIn()) {
      return true;
    }
      // Store the attempted URL for redirecting
    this.auth.redirectUrl = url;

    // not logged in so redirect to login page
    this.router.navigate(['/login']);
    return false;

  }

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
//     let url: string = state.url;
//     if (!this.auth.isLoggedIn()) {

//       // not logged in so redirect to login page
//         this.router.navigate(['/login']);
//         return false;
//         }
//          // Store the attempted URL for redirecting
//     this.auth.redirectUrl = url;
//  // logged in so return true
//     return true;

//   }

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
   const url: string = state.url;
   return this.checkLogin(url);
}

canLoad(route: Route): boolean {
  const url = `/${route.path}`;
  return this.checkLogin(url);
  }
}
