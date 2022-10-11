import { Output, EventEmitter, Injectable, } from '@angular/core';
@Injectable()
export class AppStateHolder { 
    post: any;
    gender: string;
    isLogin: boolean = false;
}