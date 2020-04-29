import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import {LoginComponent} from '../app/login/login.component'
import {HttpClientModule} from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
const appRoutes:Routes =[
  {path:'',component:WelcomePageComponent},
  {path:'login',component:LoginComponent}
  ];
@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
