var express = require('express');
var app = express.Router();
var blogModel = require('../models/blogs');
var userModel = require('../models/profile');

app.get('/',function(req,res){
    console.log("Working");
});

//create new blog
app.post('/create-blog',(req,res)=>{
    var blog = new blogModel({
        blogTitle:req.body.blogTitle,
        blogDescription:req.body.blogDescription,
        blogCategory:req.body.blogCategory,
        blogFullStory:req.body.blogFullStory,
        blogOwner:{
            memberId:req.body.blogOwner.memberId,
            memberName:req.body.blogOwner.memberName
        }
    });

    blog.save((err,blog)=>{
        if(err){
            res.send(err).status(501);
        }
        else{
            res.json({"message":"Story Created",data:blog});
        }
    });
});

//get the list of all blogs
app.get('/get-blogs',(req,res)=>{
    blogModel.find({},(err,blogs)=>{
        if(err){
            res.send(err).status(501);
        }
        else{
            res.json({"message":"Get Blogs Successful",data:blogs});
        }
    });
});

//get the list of blogs by username
app.get('/get-blogs/:name',(req,res)=>{
    blogModel.find({"blogOwner.memberName":req.params.name},(err,blogs)=>{
        if(err){
            res.send(err).status(501);
        }
        else{
            res.json({"message":"Get Blogs Successful",data:blogs});
        }
    });
});

//Getting the Particular Full Blog Description
app.get('/getFullStory/:id',(req,res)=>{
    blogModel.find({blogId:req.params.id},(err,blogs)=>{
        if(err){
            res.send(err).status(501);
        }
        else{
            console.log(JSON.stringify(blogs[0].likes.memberId));
            res.json({"message":"Get Details Sucessfull",data:blogs});
        }
    })
});

//like the particular story
app.post('/like-story',(req,res)=>{
    blogModel.findOneAndUpdate({blogId:req.body.blogId},
        {$push: {"likes":{"memberId": req.body.memberId,"memberName":req.body.memberName}}},
        {safe: true, upsert: true, new : true},(err,blog)=>{
        if(err){
            res.send(err).status(501);
        }
        else{
            userModel.findOneAndUpdate({"memberId":req.body.memberId},{$push:{"likedBlogs":req.body.blogId}},
            {safe: true, upsert: true, new : true},(error,user)=>{
                if(error){
                    res.send(err).status(501);
                }
                else{
                    res.json({"message":"Liked Successfully"});
                }
            });
        }
    })
});

//unlike scenario story
app.post('/un-like-story',(req,res)=>{
    blogModel.update({"blogId":req.body.blogId},{$pull:{"likes":{"memberId":req.body.memberId}}},
    {safe: true, multi:true },(err,blog)=>{
        if(err){
            res.send(err).status(501);
        }
        else{
            userModel.update({"memberId":req.body.memberId},{$pull:{"likedBlogs":req.body.blogId}},
            {safe: true, upsert: true, new : true},(error,user)=>{
                if(error){
                    res.send(err).status(501);
                }
                else{
                    res.json({"message":"Action Successfully"});
                }
            });
        }
     })
});

module.exports = app;