import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentComponent } from './comment/comment.component';
import { NewsComponent } from './news/news.component';
import { PastComponent } from './past/past.component';
import { SubmitComponent } from './submit/submit.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:"",
    component:NewsComponent
  },
  {
    path:'news',
    component:NewsComponent,
  },
  {
    path:'past',
    component:PastComponent,
  },
  {
    path:'comment',
    component:CommentComponent
  },
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'submit',
    component:SubmitComponent
  },
  {
    path:'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
