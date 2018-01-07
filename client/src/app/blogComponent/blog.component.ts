import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { BlogService } from './blog.service';
import { Router } from '@angular/router';


@Component({
    selector:'blog',
    templateUrl:'./blog.component.html',
    styleUrls:['./blog.component.css'],
    providers:[BlogService]
})

export class BlogComponent{
    public cardDetails:any=[];
    public receivedBlogDetails:any;

    constructor(private appService:AppService,private blogService:BlogService,private router:Router){}

    ngOnInit(){
        this.blogService.viewBlogs().subscribe((res)=>{
            console.log(res);
            this.receivedBlogDetails = res;
            for(let blog of this.receivedBlogDetails.data){
                console.log(blog);
                this.cardDetails.push(blog);
            }
            
        });
    }

    viewBlogDetails(blog:any){
        this.router.navigate(['view-blog',blog.blogId,blog.blogTitle]);
    }

}