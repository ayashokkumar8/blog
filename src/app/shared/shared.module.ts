import { NgModule }  from '@angular/core';
import { FormsModule, ReactiveFormsModule   }    from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { BrowserModule }    from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule }      from 'ngx-toastr';
import { AppStateHolder }   from './app-state.holder';
import { CheckPoint } from './checkpoint';

@NgModule({
    imports: [ 
        FormsModule, 
        ReactiveFormsModule,
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            timeOut: 1500,
            positionClass: 'toast-top-right' })
    ],
    providers: [
        AppStateHolder,
        CheckPoint,
        CookieService
    ],
    declarations: [ ],
    exports: [
        FormsModule, 
        ReactiveFormsModule,
        HttpClientModule,
        BrowserModule,
        ToastrModule,
        BrowserAnimationsModule
    ],
})

export class SharedModule {
    
}