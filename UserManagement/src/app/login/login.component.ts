import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userData: string;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    // this.loginService.LoggedOut();
  }

  ngOnInit(): void {
    localStorage.removeItem('currentUser');
  }

  login(username: string, password: string): void {
    localStorage.removeItem('currentUser');
    return this.loginService.Login(username, password).subscribe(
      () => {
        if (this.loginService.isLoggedIn()) {
          const redirectUrl = this.loginService.redirectUrl
            ? this.loginService.redirectUrl
            : this.loginService.getAdminRole()
            ? '/admin'
            : '/user';
          this.router.navigate([redirectUrl]);
        } else {
          alert('Username/Password is incorrect');
        }
      },
      () => {
        alert('Username/Password is incorrect');
      }
    );
  }
}
