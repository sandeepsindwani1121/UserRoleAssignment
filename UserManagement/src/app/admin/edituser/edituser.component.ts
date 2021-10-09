import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder, FormControl} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {LoginService} from '../../service/login.service';
import { Login } from 'src/app/login';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  
  //private sub: Subscription;
  userForm:FormGroup;
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required]);
	role = new FormControl('', [Validators.required]);
  constructor(private fb:FormBuilder, private router:Router, private loginService:LoginService, private route:ActivatedRoute) { 
    

   this.userForm=this.fb.group({
    // username:['', Validators.required],
    // password: ['', Validators.required],
    // email:['',Validators.required],
    // role:['',Validators.required]
    username:this.username,
    password: this.password,
    email:this.email,
    role:this.role
  });
  }

  ngOnInit(): void { 
   this.route.params.subscribe((params: any) => {
    this.getById(params.id);
   });
  }

   getById(id:number){
    this.loginService.getById(id).subscribe(
      (user:any) =>{
        if(user!=null&& user!=undefined)
        this.populateForm(user);
      }
    )
   }

   populateForm(user: any): void {
    this.userForm.patchValue({
      username:user.username,
      password:user.password,
      email:user.email,
      role:user.role
     });
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
