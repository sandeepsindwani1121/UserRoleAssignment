import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { LoginService } from '../service/login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const url: string = state.url;
    return this.checklogin(url);
  }

  checklogin(url: string): boolean {
    if (this.loginService.isLoggedIn()) {
      return true;
    } else {
      this.loginService.redirectUrl = url;
      this.router.navigate(['/login'], { queryParams: { returnUrl: url } });
    }
    return false;
  }
}
