import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class PostsService {
    constructor(
        private http: HttpClient) {

    }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': '*/*'
        })
    };

    // https://jsonplaceholder.typicode.com/posts

    getPosts(id: number){
        const url = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
        return this.http.get(url,this.httpOptions);
    }
}