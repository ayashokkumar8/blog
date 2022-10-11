import { Injectable }  from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { AppStateHolder } from './app-state.holder';

@Injectable()
export class CheckPoint implements CanActivate {
    constructor( public stateHolder: AppStateHolder,
        private route: Router,
        private cookies: CookieService) {
    }
 
    //Validating the user in the cookie
    canActivate() {
        //Getting the user from the cookie
        let user = this.cookies.get('user');
        if(user)
            return true;
        else
        { 
            this.route.navigate(['/login']);
            return false;
        }
    }
}