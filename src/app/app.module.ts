import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { AdminModule } from './admin/admin.module';
//import { LoginComponent } from './admin/login/login.component';
import { ButtonComponent } from './button/button.component';
import { ClickMeComponent } from './button/click-me.component';
import { ClickMe2Component } from './button/click-me2.component';
import {
  KeyUpComponent_v1,
  KeyUpComponent_v2,
  KeyUpComponent_v3,
  KeyUpComponent_v4
} from './button/keyup.components';
import { LittleTourComponent } from './button/little-tour.component';
import { LoopbackComponent } from './button/loop-back.component';


// Initialize Firebase
var config = {
  apiKey: "AIzaSyA---Ji1Kg4wiPLdyQzLeIBpxquK-xvw78",
  authDomain: "angular-learn-8c93c.firebaseapp.com",
  databaseURL: "https://angular-learn-8c93c.firebaseio.com",
  projectId: "angular-learn-8c93c",
  storageBucket: "angular-learn-8c93c.appspot.com",
  messagingSenderId: "395325510451"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    AdminComponent,
    //LoginComponent,
    ButtonComponent,
    ClickMeComponent,
    ClickMe2Component,
    KeyUpComponent_v1,
    KeyUpComponent_v2,
    KeyUpComponent_v3,
    KeyUpComponent_v4,
    LittleTourComponent,
    LoopbackComponent
  ],
  imports: [
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
