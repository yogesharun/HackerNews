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
  public s=true;
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

     public upvote(id:any,score:any)
     {
       console.log(id)
       if(localStorage.getItem("user")==null)
       {
         alert("Please!! login")
         return 
       }
       this.s=true
       let vote={
         "user":localStorage.getItem("user"),
         "id":id,
         "score":score+1
       }
       console.log(id);
       this._service.advote(vote).subscribe((res)=>{console.log(res);
          this._service.getCpost(this.id).subscribe(data => {this.ques=data;}, error => console.log(error));this.ques=res},(err)=>console.log(err))
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
  check(vote:any)
  {
   
    let user =localStorage.getItem("user")
    if(user !=null)
    {
      console.log("in IF")
        return vote.includes(user)
    }
   
    return false

  }

  unvote(id:any,score:any)
  {
    let dec={
      "id":id,
      "user":localStorage.getItem("user"),
      "score":score-1
    }
    this._service.unvote(dec).subscribe(data=>{console.log(data); this._service.getCpost(this.id).subscribe(data => {this.ques=data;}, error => console.log(error))},err=>{console.log(err)})
  }
  ngOnInit(): void {
  }

}
