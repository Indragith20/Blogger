import { Component } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { LoginService } from './login.service';
import { MatSnackBar } from '@angular/material';
import { AppService } from '../app.service';
import {User} from '../models/user.model';
import { Router } from '@angular/router';

@Component({
    selector:'login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css'],
    providers:[LoginService]
})

export class LoginComponent{
    loginForm:FormGroup;
    loggedInUser:any;
    user:User;

    constructor(private fb:FormBuilder,private loginService:LoginService,private snackbar:MatSnackBar,private appService:AppService,private router:Router){
        this.createForm();
    }

    //************userEmail may be username or EMail Id**************//
    createForm(){
        this.loginForm = this.fb.group({
            userEmail:'',
            password:''
        });
    }

    loginUser(){
        this.loginService.login(this.loginForm.value).subscribe(res=>{
            console.log(res);
            this.loggedInUser=res;
            this.user = {
                memberId:this.loggedInUser.data.memberId,
                name:this.loggedInUser.data.userName,
                email:this.loggedInUser.data.emailId,
                likedBlogs:this.loggedInUser.data.likedBlogs,
                blogger:true
            };
            this.appService.setUser(this.user);
            this.snackbar.open('Login Sucessful', '', {
                duration: 3000
              });
            this.router.navigate(['create-blog']);  
            
        });
    }
}