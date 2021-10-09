import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../service/login.service';
import { Login } from 'src/app/login';
import {Router} from '@angular/router';
import { of } from 'rxjs';

// import {CdkTableModule} from '@angular/cdk/table';
// // import {Observable} from 'rxjs';
//  import { DataSource } from '@angular/cdk/table';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
  export class UserComponent implements OnInit {
  //users:Login[];
  dataSource :Login[];
  displayedColumns = ['id','username', 'password', 'email', 'role','action'];
  constructor(private _service:LoginService, private router:Router) { }

  ngOnInit(): void {
     this.getAll();
  }
  getAll()
  {
    this._service.getAll().subscribe((user:any)=>{
      if(user!=null && user!=undefined)
        this.populateForm(user);
      }
    )
  }

   populateForm(user:any):void{
    this.dataSource=user;
   }

  deleteuser(id){
    if(confirm("Do you want to delete selected user?")){
      this._service.delete(id).subscribe(item=>{
        this.router.navigate(['/admin']);
      })
    }
  }

}



