import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable()

export class BlogService{
    constructor(private http:HttpClient){}

    viewBlogs(){
        var headers = new HttpHeaders();
        headers.append('content-type','application/json');
        return this.http.get('http://localhost:4000/api/blogs/get-blogs',{headers});
    }
}