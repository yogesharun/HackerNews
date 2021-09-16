import { FirebaseService } from './../Services/firebase.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  user:any;
  constructor(public FirebaseService:FirebaseService) {  }
  check(){
    if(localStorage.getItem('user')==null){
      return true;
    }else{
      return false;
    }
  }
  logout(){
    this.FirebaseService.logout()
    localStorage.clear()
    location.reload()
  }

  ngOnInit(): void {
    this.user=localStorage.getItem("user")
  }

}
