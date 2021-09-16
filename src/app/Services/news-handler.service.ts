import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class NewsHandlerService {
  constructor(private http:HttpClient) { }
  getpost()
  {
    let url="http://localhost:9000/post"
   return this.http.get(url)
  }
  getComment(id:any)
  {
    let url=`http://localhost:9000/comment/${id}`
    return this.http.get(url)
  }
  getCpost(id:any)
  {
    let url=`http://localhost:9000/post/${id}`
    return this.http.get(url)
  }
  addPost(data:any)
  {
    let url=`http://localhost:9000/post`
    return this.http.post(url,data)
  }
  addComment(data:any)
  {
    let url=`http://localhost:9000/comment`
    return this.http.post(url,data)
  }
  login(data:any)
  {
    let url=`http://localhost:9000/user`
    return this.http.post(url,data)
  }
  advote(data:any)
  {
    let url=`http://localhost:9000/post`
    return this.http.put(url,data)
  }
  unvote(data:any)
  {
    let url=`http://localhost:9000/post`
    return this.http.patch(url,data)
  }

  caltime(ctime:any)
  {
    var current=Date.now();
    var result= current-ctime;
    result= result/1000;
    console.log(new Date(ctime));
    if(result<60){
      return Math.floor(result)+' seconds ago';
    }
    else if((result/60)<60){
      return Math.floor(result/60)+' minutes ago';
    }
    else if((result/60)/60<24){
      return Math.floor((result/60)/60)+' hours ago';
    }
    else if((((result/60)/60)/24)<7){
      return Math.floor(((result/60)/60)/24)+' days ago';
    }
    else if(((((result/60)/60)/24)/7)<5){
      return Math.floor((((result/60)/60)/24)/7)+' weeks ago';
    }
    else if((((((result/60)/60)/24)/7)/4)<12){
      return Math.floor(((((result/60)/60)/24)/7)/4)+' months ago';
    }
    else{
      return Math.floor((((((result/60)/60)/24)/7)/4)/12)+' years ago';
    }
  }
}

