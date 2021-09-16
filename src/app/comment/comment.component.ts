import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsHandlerService } from '../Services/news-handler.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  public id:any;
public ques:any;
public com:any;
public data:any;
  constructor(private router:Router,
    private route:ActivatedRoute,private _service:NewsHandlerService) {
      this.id=this.route.snapshot.queryParamMap.get("id");
      this._service.getCpost(this.id).subscribe(data => { this.ques = data; console.log(this.ques); }, error => console.log(error));
    this._service.getComment(this.id).subscribe(data=>{this.com=data;console.log(this.com)},err=>console.log(err));
      console.log(this.com)
     }

     addc(text:any)
     {
       if(localStorage.getItem("user")==null)
       {
         alert("please!! login")
         return
       }
       this.data={
         "user":localStorage.getItem("user"),
         "text":text,
         "parent":this.id, 
       }
       this._service.addComment(this.data).subscribe(data1=>{console.log(data1)})
       location.reload()
     }

    upvote()
    {
      return "dff"
    }
    public subs(str:any)
  {
    var str1="";
    console.log(str1);
    return str1[1]+"."+str1[2];
  }
  public caltime(ctime:any)
  {
    return this._service.caltime(ctime)
  }
  adhide(/*passid*/)
  {
    //add this id to user data to skip
    console.log("in1")
  }
  ngOnInit(): void {
  }

}
