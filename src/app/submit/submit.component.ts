import { Component, OnInit } from '@angular/core';
import { NewsHandlerService } from '../Services/news-handler.service';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
  public data:any;
  constructor(private _service:NewsHandlerService) { }

  addpost(title:any,url:any)
  {

    this.data={
      "user":sessionStorage.getItem("user"),
      "title":title,
      "url":url
    }
      this._service.addPost(this.data).subscribe(data=>console.log(data))
  }
  ngOnInit(): void {
  }
  
}
