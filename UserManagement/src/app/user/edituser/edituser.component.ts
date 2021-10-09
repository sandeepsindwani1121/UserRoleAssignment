import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {LoginService} from '../../service/login.service';
import { Login } from 'src/app/login';
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  userForm:FormGroup;
  constructor(private fb:FormBuilder, private router:Router, private loginService:LoginService, private route:ActivatedRoute) { 
   const id=this.route.snapshot.params.id;

   this.userForm=this.fb.group({
    username:['', Validators.required],
    password: ['', Validators.required],
    email:['',Validators.required],
    role:['',Validators.required]
  });


   this.loginService.getById(id).subscribe(
     user=>{
       this.userForm.patchValue({
        username:user.username,
        password:user.password,
        email:user.email,
        role:user.role
       });
     }
   )



  }

  ngOnInit(): void {
  }

  update(username,password,email,role){
    var objLogin=new Login();
    objLogin.id=this.route.snapshot.params.id;
    objLogin.username=username;objLogin.password=password;objLogin.email=email;objLogin.role=role;
    this.loginService.update(objLogin).subscribe(
      data=>{
        this.router.navigate(['/admin/users']);
      }
    )
     }

}
