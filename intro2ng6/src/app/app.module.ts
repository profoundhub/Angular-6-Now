import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { HttpClient } from 'selenium-webdriver/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent 
  ],
  imports: [
    BrowserModule,
    HttpClient,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      }, {
        path: 'login',
        component: LoginComponent
      }, {
        path: 'admin',
        component: AdminComponent
      }      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
