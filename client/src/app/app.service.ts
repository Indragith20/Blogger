import { Injectable } from '@angular/core';
import { User } from './models/user.model';

@Injectable()

export class AppService{
    public user:User = {
        memberId:0,
        name:"",
        email:"",
        likedBlogs:[],
        blogger:false
    };

    getUser(){
        return this.user;
    }

    setUser(newUser:User){
        this.user = newUser;
        console.log(this.user);
    }
}