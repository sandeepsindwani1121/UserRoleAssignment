import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule,MatFormFieldModule, MatButtonModule, MatCardModule} from '@angular/material';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { NamePipe } from './name.pipe';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {UserModule} from './user/user.module';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import {AuthModule} from './auth/auth.module';
import { LoginComponent } from './login/login.component';
import {AdminModule} from './admin/admin.module';
 import {httpInterceptorProviders} from './http-interceptors/index';
 import {MatTableModule} from '@angular/material/table';

const routes: Routes=[
  // { path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component: LoginComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    NamePipe,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, 
    ReactiveFormsModule,FormsModule,AuthModule,AdminModule,BrowserAnimationsModule,
    // RouterModule.forRoot(routes), 
    HttpClientModule, UserModule, AppRoutingModule,
    MatInputModule, MatFormFieldModule, MatButtonModule,MatCardModule,MatTableModule
    
  ],
  exports:[HeaderComponent],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
