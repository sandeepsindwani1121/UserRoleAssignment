import { TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';
import {HttpClient} from '@angular/common/http';
import {Login} from '../login';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';


let loginService: LoginService;
const teams:Login[]=[
  {
    "id": 1,
    "username": "sandeep",
    "password":"sandeep",
    "email": "sandeep@gmail.com",
    "role": "admin"
  },
  {
    "id": 2,
    "username": "vikas",
    "password":"vikas",
    "email": "vikas@gmail.com",
    "role": "user"
  }
];

describe('testing',()=>{
 const http = {
  get: jest.fn(()=>
           of(teams)
  )
};
  //let service: LoginService;
 beforeEach(()=>{
  loginService = new LoginService(http as any);
 });

 it('test block ', () => {
  expect(loginService).toBeTruthy();
 });

 it('get Functionality',()=>{
  loginService.getAll().subscribe(item=>{
    expect(http.get).toBeCalledWith('http://localhost:3000/users'); //Showing calling with url
    expect(item.length).toEqual(3);  //3 records in API
  })

 })
});

