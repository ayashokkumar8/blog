import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService }    from 'ngx-toastr';
import { PostDetailsService } from './post-details.service';
import { AppStateHolder } from '../shared/app-state.holder';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html'
})
export class PostDetailsComponent implements OnInit {

  postComments = [];
  comment: string;
  status: string = 'ok';
  gender: string;
  emptyMessage: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastrService: ToastrService,
    public stateHolder: AppStateHolder,
    private service: PostDetailsService,
    private cookies: CookieService ) { }

  ngOnInit(): void {
    this.loadPostComments();
  }

  //Loading comments of the selected posts by taking id from the URL
  loadPostComments(){
    this.status = 'busy';
    //Taking id from the URL using route params
    this.route.params.forEach((params: Params) => {
      let id = params['id'];

      //Calling getpostdetails in the service to get the comments of current post
      this.service.getPostDetails(id)
          .subscribe((data:any[])=>{

            //Adding statical gender object to the recieved data
            data.forEach((d,i) =>{
              if(i%2 == 0)
                d.gender = 'M';
              else
                d.gender = 'F';
            });

            //Assigning to the variable postComments
            this.postComments = data;

            if(this.postComments.length == 0)
              this.emptyMessage = true;

            this.status = 'ok';
          },(error)=>{
            this.status = 'ok';
            //Error toastr will be displayed in the right corner of the page when error occured
            this.toastrService.error(error.message); 
          })
    })
  }

  //Sending the comment to the server to get response back
  sendComment(){
    this.status = 'busy';

    //getting the user from the cookie
    let user = this.cookies.get('user');

    //getting the gender from the cookie
    let gender = this.cookies.get('gender');

    //Preparation of local modal same as comment model
    let comm = {
      postId: this.stateHolder.post.id,
      id: 11,
      name: user,
      email: "Eliseo@gardnerr.bizz",
      body: this.comment
    }

    //Sending the comment to the server and subscribing the response from the server
    this.service.sendComment(comm).subscribe((data: any) => {
      this.comment = null;

      //Adding local object to the data
      data.gender = gender;
      this.postComments.push(data);
      this.status = 'ok';
    },(error)=>{
      this.status = 'ok';
      //Error message will be displayed on the toastr at the right side of the page
      this.toastrService.error(error.message);
    });
  }

  //Navigate to Posts
  back(){
    this.router.navigate(['/posts']);
  }
}
