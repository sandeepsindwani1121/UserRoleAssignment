import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EdituserComponent } from './edituser/edituser.component';
import { UserComponent } from './user/user.component';
const routes: Routes = [
  {
    path: 'user',
    children: [
      { path: 'edituser/:id', component: EdituserComponent },
      { path: '', component: UserComponent, pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
