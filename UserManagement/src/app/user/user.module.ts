import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import { EdituserComponent } from './edituser/edituser.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [UserComponent, EdituserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    
  ]
})
export class UserModule { }
