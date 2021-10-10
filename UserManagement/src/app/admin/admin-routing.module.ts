import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AuthGuard } from '../auth/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { EdituserComponent } from './edituser/edituser.component';

const routes: Routes = [
  {
    path: 'admin',
    canActivate: [AuthGuard],
    children: [
      { path: 'users', component: UserComponent, pathMatch: 'full' },
      { path: 'users/adduser', component: CreateuserComponent },
      { path: 'users/edituser/:id', component: EdituserComponent },
      { path: '', component: AdminComponent, pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
