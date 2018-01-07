import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SignUpService } from './sign-up.service';
import { MatSnackBar } from '@angular/material';

@Component({
    selector:'sign-up',
    templateUrl:'./sign-up.component.html',
    styleUrls:['./sign-up.component.css'],
    providers:[SignUpService]
})

export class SignupComponent{
    // public firstName:string;
    // public lastName:string;
    // public email:string;
    // public contact:number;
    // public birthDate:any;
    signUpForm:FormGroup;

    constructor(private fb: FormBuilder,private signUpService:SignUpService,private snackbar:MatSnackBar){
      this.createForm();
    }

    createForm(){
      this.signUpForm=this.fb.group({
        firstName:'',
        lastName:'',
        email:'',
        contact:'',
        birthDate:''
      });
    }

    signUp(){
      console.log(this.signUpForm.value);
      this.signUpService.addPost(this.signUpForm.value).subscribe(res=>{
        console.log(res);
        this.snackbar.open('Sign Up Successfull', 'Check Your Mail', {
          duration: 3000
        });
      });
    }
}