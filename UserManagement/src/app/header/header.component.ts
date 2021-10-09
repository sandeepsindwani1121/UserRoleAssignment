import { Component, OnInit } from '@angular/core';
import {LoginService} from '../service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogin: boolean
  constructor(private loginService:LoginService) { 
  }

  ngOnInit(): void {
    if(localStorage.getItem('currentUser')){
      this.isLogin=true;
    }
    else{
      this.isLogin=false;
    }
  }

  get isLoggedIn() { return this.loginService.isLoggedIn(); }

  get getAdminRole() {return this.loginService.getAdminRole();}

}
