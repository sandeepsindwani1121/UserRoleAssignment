import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLogin: boolean;
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    if (localStorage.getItem('currentUser')) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  get isLoggedIn(): boolean {
    return this.loginService.isLoggedIn();
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  get getAdminRole(): boolean {
    return this.loginService.getAdminRole();
  }

  get getUserName(): string {
    return this.loginService.getUserName();
  }
}
