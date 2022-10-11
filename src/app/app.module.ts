import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule }  from './app-routing.module';
import { AppComponent }      from './app.component';
import { LoginModule }       from './login/login.module';
import { SharedModule }      from './shared/shared.module';
import { PostsModule }       from './posts/posts.module';
import { PostDetailsModule } from './post-details/post-details.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PostsModule,
    LoginModule,
    PostDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
