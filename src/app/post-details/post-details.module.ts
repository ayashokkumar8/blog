import { NgModule }  from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { PostDetailsComponent } from './post-details.component';
import { PostDetailsService } from './post-details.service';

@NgModule({
    imports:[
        SharedModule
    ],
    providers:[
        PostDetailsService
    ],
    declarations:[
        PostDetailsComponent
    ]
})

export class PostDetailsModule {
    
}