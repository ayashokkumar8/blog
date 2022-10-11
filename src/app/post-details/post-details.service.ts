import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class PostDetailsService {
    constructor(
        private http: HttpClient) {

    }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': '*/*'
        })
    };

    getPostDetails(id: any){
        const url = 'https://jsonplaceholder.typicode.com/comments?postId='+`${id}`;
        return this.http.get(url,this.httpOptions);
    }
    
    sendComment(comment: any){
        const url = 'https://jsonplaceholder.typicode.com/comments';
        return this.http.post(url, JSON.stringify(comment),this.httpOptions);
    }
}