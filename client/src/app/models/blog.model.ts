export interface Blog{
    blogTitle:string;
    blogDescription:string;
    blogCategory:string;
    blogFullStory:string;
    blogOwner:{
        memberId:Number,
        memberName:String
    }
}