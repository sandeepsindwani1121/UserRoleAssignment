import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import {LoginService} from '../service/login.service';
import { Observable } from 'rxjs';
import {Injectable} from '@angular/core';
@Injectable()

export class AuthInterceptor implements HttpInterceptor{

constructor(private loginService:LoginService){}
intercept(request:HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{
if(this.loginService.isLoggedIn()){
    const userName=this.loginService.getUserName();
    request=request.clone({
       setHeaders:{Authorization:'bearer '+userName}  
    })
}
   return next.handle(request);
}

}
