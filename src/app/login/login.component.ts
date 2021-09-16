import { FirebaseService } from './../Services/firebase.service';
import { Component, EventEmitter, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide=true;
  title = 'firebase-angular-auth';
  isSignedIn = false
  
  constructor(public FirebaseService:FirebaseService){

  }
  ngOnInit(): void {
    if(localStorage.getItem('user')!==null)
    this.isSignedIn= true
    else
    this.isSignedIn=false
  }
  async onSignup(email:string,password:string){
    await this.FirebaseService.signup(email,password)
    if(this.FirebaseService.isLoggedIn)
    this.isSignedIn =false
    location.reload()
    alert("You are registered pls Sign IN")
  }
  async onSignin(email:string,password:string){
    await this.FirebaseService.signin(email,password)
    if(this.FirebaseService.isLoggedIn)
    this.isSignedIn =true
    location.reload()
  }

  handleLogout(){
    this.isSignedIn=false
  }
  logout(){
    this.FirebaseService.logout()
    location.reload()
  }
  

}
