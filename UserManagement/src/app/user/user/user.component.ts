import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../service/login.service';
import { Login } from 'src/app/login';
import {Router} from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private _service:LoginService, private router:Router) { }
     
  user:Login;
  ngOnInit(): void {
       if(localStorage.getItem('currentUser')){
         //alert(localStorage.getItem('currentUser'))
         this._service.getById(JSON.parse(localStorage.getItem('currentUser'))[0].id).subscribe(
        user=>{
        console.log(user);
          this.user=user;
      });

       }
       else{
         this.router.navigate(['/login']);
       }


  }

   


}
