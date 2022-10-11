import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { Router }    from '@angular/router';
import { ToastrService }    from 'ngx-toastr';
import { AppStateHolder } from '../shared/app-state.holder';
import { CookieService } from 'ngx-cookie-service';

import * as _ from 'lodash';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html'
})
export class PostsComponent implements OnInit {

  takenData = [];
  status: string = 'ok';
  user: string;
  emptyMessage: boolean = false;

  constructor( private service: PostsService,
    private router: Router,
    private toastrService: ToastrService,
    private stateHolder: AppStateHolder,
    private cookies: CookieService) { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  //To get all posts from the server with the userId
  getAllPosts(){
    this.status = 'busy';
    //Getting the cookie 
    this.user = this.cookies.get('user');
    let userId;

    //Checking the user 
    if(this.user =='Graham')
      userId = 1;
    else
      userId = 2;

    //Service to get the posts for given userId
    this.service.getPosts(userId)
        .subscribe((data: any[]) => {

          //Assigning data to the array takenData
          this.takenData = data;

          //checking the lenght of the data for Empty message
          if(this.takenData.length == 0)
            this.emptyMessage = true;

          this.status = 'ok';
    },(error)=>{
      this.status = 'ok';

      //Displaying the error message in the toastr at the right side corner of the page
      this.toastrService.error(error.message);
    });
  }

  //Triggering the this method when post is clicked
  postClick(post: any){
    //Saving the post in the local maintainence
    this.stateHolder.post = post;
    let link = ['/post-details', post.id];
    this.router.navigate(link);
  }

  //Triggering this method when logout clicked
  logout(){
    this.cookies.delete('user'); //Deleting the user from the cookie
    this.cookies.delete('gender'); //Deleting the gender from the cookie
    this.router.navigate(['/login']); // Redirecting to the login page
  }
}
