import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from '../service/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginService:LoginService, private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      let url:string=state.url;
      return this.checklogin(url);
  }

 checklogin(url){
  if(this.loginService.isLoggedIn())
  return true;
  else{
    this.loginService.redirectUrl=url;  
   this.router.navigate(['/login'],{queryParams:{returnUrl:url}});
  }
 }
}