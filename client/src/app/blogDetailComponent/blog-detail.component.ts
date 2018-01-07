import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { BlogDetailService } from './blog-detail.service';
import { AppService } from '../app.service';
import { StoryAction } from '../models/story-action.model';

@Component({
    selector:'blog-detail',
    templateUrl:'./blog-detail.component.html',
    styleUrls:['./blog-detail.component.css'],
    providers:[BlogDetailService]
})

export class BlogDetailComponent{
    public blogId:number;
    public blogDetails:any;
    public blogStory:any;
    public likedDetails:StoryAction;
    public unLikedDetails:StoryAction;
    public userLikeAction:boolean = true;

    constructor(private router:Router,private currentRoute:ActivatedRoute,
                private blogDetailService:BlogDetailService,private appService:AppService){
        this.currentRoute.params.subscribe(params=>{
            this.blogId = params.id;
            this.getBlogDetails(this.blogId);
        });
    }

    getBlogDetails(id:any){
        this.blogDetailService.getBlog(id).subscribe((res)=>{
            console.log(res);
            this.blogDetails = res;
            this.blogStory = this.blogDetails.data[0];
            for(let i=0;i<this.appService.user.likedBlogs.length;i++){
                if(this.appService.user.likedBlogs[i] == this.blogStory.blogId){
                    this.userLikeAction = false;
                }
                else{
                    this.userLikeAction = true;
                }
            }
        })
    }

    likeStory(){
        this.likedDetails = {
            memberId:this.appService.user.memberId,
            memberName:this.appService.user.name,
            blogId:this.blogId
        };

        this.blogDetailService.likeBlog(this.likedDetails).subscribe((res)=>{
            console.log(res);
        })
    }

    unLikeStory(){
        this.unLikedDetails = {
            memberId:this.appService.user.memberId,
            memberName:this.appService.user.name,
            blogId:this.blogId
        }

        this.blogDetailService.unLikeBlog(this.unLikedDetails).subscribe((res)=>{
            console.log(res);
            this.userLikeAction = true;
        });
    }

    
}