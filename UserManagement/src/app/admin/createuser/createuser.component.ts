import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from '../../service/login.service';
import { Login } from 'src/app/login';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {
   userForm:FormGroup;
  constructor(private fb:FormBuilder, private router:Router, private loginService:LoginService) { 

   

  }

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required]);
	role = new FormControl('', [Validators.required]);

  ngOnInit(): void {
    this.userForm=this.fb.group({
      username:this.username,
      password: this.password,
      email:this.email,
      role:this.role
    });
  }
  create(username,password,email,role){
    if (this.userForm.dirty && this.userForm.valid) {
   //this.loginService.
   var objLogin=new Login();
   objLogin.username=username;objLogin.password=password;objLogin.email=email;objLogin.role=role;
   this.loginService.Add(objLogin).subscribe(
     data=>{
       this.router.navigate(['/admin/users']);
     }
   )
  }
  }
}
