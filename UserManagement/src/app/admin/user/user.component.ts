import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Login } from 'src/app/login';
import { Router } from '@angular/router';
import { of } from 'rxjs';

// import {CdkTableModule} from '@angular/cdk/table';
// // import {Observable} from 'rxjs';
//  import { DataSource } from '@angular/cdk/table';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  // users:Login[];
  dataSource: Login[];
  displayedColumns = ['id', 'username', 'password', 'email', 'role', 'action'];
  constructor(private service: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.getAll();
  }
  getAll(): void {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.service.getAll().subscribe((user: any) => {
      if (user !== null && user !== undefined) {
        this.populateForm(user);
      }
    });
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  populateForm(user: any): void {
    this.dataSource = user;
  }

  deleteuser(id: number): void {
    if (confirm('Do you want to delete selected user?')) {
      this.service.delete(id).subscribe(() => {
        this.router.navigate(['/admin']);
      });
    }
  }
}
