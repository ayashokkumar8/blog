import { NgModule }  from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { PostsComponent } from './posts.component';
import { PostsService } from './posts.service';

@NgModule({
    imports:[
        SharedModule
    ],
    providers:[
        PostsService
    ],
    declarations:[
        PostsComponent
    ]
})

export class PostsModule {
    
}