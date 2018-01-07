import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Blog } from '../models/blog.model';

@Injectable()

export class CreateBlogService{
    constructor(private http:HttpClient){

    }

    createStory(blogDetails:Blog){
        var headers = new HttpHeaders();
        headers.append('content-type','application/json');
        return this.http.post('http://localhost:4000/api/blogs/create-blog',blogDetails,{headers});
    }
}