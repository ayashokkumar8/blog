import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent }       from './posts/posts.component';
import { LoginComponent } from './login/login.component';
import { CheckPoint } from './shared/checkpoint';
import { PostDetailsComponent } from './post-details/post-details.component';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: 'posts',
    component: PostsComponent,
    canActivate: [CheckPoint]
  },
  {
    path: 'post-details/:id',
    component: PostDetailsComponent,
    canActivate: [CheckPoint]
  },
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
