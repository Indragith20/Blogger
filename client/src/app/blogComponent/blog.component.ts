import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { BlogService } from './blog.service';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
    selector:'blog',
    templateUrl:'./blog.component.html',
    styleUrls:['./blog.component.css'],
    providers:[BlogService]
})

export class BlogComponent{
    public cardDetails:any=[];
    public receivedBlogDetails:any;

    constructor(private appService:AppService,private blogService:BlogService,private router:Router,private currentRoute:ActivatedRoute){
        this.currentRoute.params.subscribe((params)=>{
            if(params.bloggerName){
                this.getBlogsbyUser(params.bloggerName);
            }
            else{
                this.getGeneralBlogs();
            }
        })
    }

    getGeneralBlogs(){
        this.blogService.viewBlogs().subscribe((res)=>{
            console.log(res);
            this.receivedBlogDetails = res;
            for(let blog of this.receivedBlogDetails.data){
                console.log(blog);
                this.cardDetails.push(blog);
            }
            
        });
    }

    getBlogsbyUser(name:String){
        this.blogService.viewBlogsByUser(name).subscribe((res)=>{
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