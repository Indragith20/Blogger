import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { StoryAction } from '../models/story-action.model';

@Injectable()

export class BlogDetailService{
    constructor(private http:HttpClient){}

    getBlog(id:number){
        var headers = new HttpHeaders();
        headers.append('content-type','application/json');

        return this.http.get('http://localhost:4000/api/blogs/getFullStory/'+id,{headers});
    }

    likeBlog(details:StoryAction){
        var headers = new HttpHeaders();
        headers.append('content-type','application/json');

        return this.http.post('http://localhost:4000/api/blogs/like-story',details,{headers});
    }

    unLikeBlog(details:StoryAction){
        var headers = new HttpHeaders();
        headers.append('content-type','application/json');

        return this.http.post('http://localhost:4000/api/blogs/un-like-story',details,{headers});
    }
}