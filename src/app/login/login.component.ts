import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { CookieService }  from 'ngx-cookie-service';
import { AppStateHolder } from '../shared/app-state.holder';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    userName: string;
    password: string;
    errorMessage: boolean = false;
    
    constructor(
        private router: Router,
        private cookie: CookieService) { }

    ngOnInit(): void {
    }

    //Checking login details after clicking login button
    loginCheck(){
        if(this.userName == 'Graham' && this.password == '123Come')
        {
            //calling the cookiset function to set the cookies
            this.cookieSet('Graham','M');
            return;
        }

        if(this.userName == 'Antonette' && this.password == '123Go')
        {
            //calling the cookiset function to set the cookies
            this.cookieSet('Antonette','F');
            return;
        }

        this.errorMessage = true;
    }

    cookieSet(user: string, gender: string){

        //setting the cookies using cookie service
        this.cookie.set('user',user);
        this.cookie.set('gender',gender);

        //navigation after succefull login
        this.router.navigate(['/posts']);
    }
}