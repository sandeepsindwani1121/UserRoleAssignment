import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { EdituserComponent } from './edituser/edituser.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {CdkTableModule} from '@angular/cdk/table';
 

@NgModule({
  declarations: [UserComponent, AdminComponent, CreateuserComponent, EdituserComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,ReactiveFormsModule,MatTableModule,BrowserAnimationsModule,CdkTableModule
  ]
})
export class AdminModule { }
