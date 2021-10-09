import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Title} from '@angular/platform-browser';
import {Observable, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import { Login } from '../login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  redirectUrl :string;
  constructor(private _http:HttpClient) { }

  getAll(): Observable<Login[]>{
    return this._http.get<Login[]>('/api/users/')
  }

  getById(id) : Observable<Login>{
    return this._http.get<Login>('/api/users/'+id);
  }

  Add(data){
    return this._http.post<Login>('/api/users/', data);
  }

 update(data){
  return this._http.put<Login>('/api/users/'+data.id, data);
 }

 delete(id){
  return this._http.delete<Login>('/api/users/'+id);
 }

  Login(username,password){
   return this._http.get('/api/users/').pipe(
     map(response=>
       {
            response= Object.values(response).filter(function(x){return x.username==username && x.password==password});
             if(response!=null && response!=undefined){
               console.log(response);
             localStorage.setItem('currentUser', JSON.stringify(response));
             }
       })
   )}

  isLoggedIn(){
    if( localStorage.getItem('currentUser')){
    return true;
    }
    else{
    return false;
    }
  }

  getUserName(){
    const userData=localStorage.getItem("currentUser");
     if(userData!=null && userData!=undefined){
       return JSON.parse(userData)[0].username;
     }
    return '';
  }

  getAdminRole(){
    const userData=localStorage.getItem("currentUser");
     if(userData!=null && userData!=undefined){
       let role= JSON.parse(userData)[0].role;
       if(role=='admin')
       return true;
       else
       return false;
     }
    return false;
  }

  LoggedOut(){
    localStorage.removeItem("currentUser");
  }

}
