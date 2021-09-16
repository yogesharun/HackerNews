import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import firebase module
import { AngularFireModule } from '@angular/fire/compat';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SubmitComponent } from './submit/submit.component';
import { LoginComponent } from './login/login.component';
import { CommentComponent } from './comment/comment.component';
import { NewsComponent } from './news/news.component';
import { PastComponent } from './past/past.component';
import { UserComponent } from './user/user.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    SubmitComponent,
    LoginComponent,
    CommentComponent,
    NewsComponent,
    PastComponent,
    UserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatStepperModule,
    MatTabsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyB2iqULGDyr4SOJBbeETPt_No6dyDL0PCE",
      authDomain: "fir-angular-auth-f8c59.firebaseapp.com",
      projectId: "fir-angular-auth-f8c59",
      storageBucket: "fir-angular-auth-f8c59.appspot.com",
      messagingSenderId: "3784499451",
      appId: "1:3784499451:web:e5f424387f478a3a98d05e",
      measurementId: "G-202CG8F28D"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
