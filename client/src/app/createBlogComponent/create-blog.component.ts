import { Component } from '@angular/core' ;
import { AppService } from '../app.service';
import { CreateBlogService } from './create-blog.service';
import { MatSnackBar } from '@angular/material';

import { User } from '../models/user.model';
import { Blog } from '../models/blog.model';

@Component({
    selector:'create-blog',
    templateUrl:'./create-blog.component.html',
    styleUrls:['./create-blog.component.css'],
    providers:[CreateBlogService]
})

export class CreateBlogComponent{
    ckeditorContent:any;
    title:string;
    description:string;
    category:string;
    user:User;
    blog:Blog;

    constructor(private appService:AppService,private createBlogService:CreateBlogService,private snackbar:MatSnackBar){
        this.ckeditorContent= `<p>Your Content Here</p>`;
        this.user = this.appService.getUser();
    }
    
    onChange(){
        console.log(this.ckeditorContent);
    }

    createBlogStory(){
        this.blog = {
            blogTitle:this.title,
            blogDescription:this.description,
            blogCategory:this.category,
            blogFullStory:this.ckeditorContent,
            blogOwner:{
                memberId:this.user.memberId,
                memberName:this.user.name
            }
        };

        this.createBlogService.createStory(this.blog).subscribe(res=>{
            console.log(res);
            this.snackbar.open('Story Added To Your Blog', '', {
                duration: 3000
              });
            
        });
    }   
}