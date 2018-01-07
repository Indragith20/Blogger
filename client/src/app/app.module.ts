import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './materialModule/material.module';
import { routingModule } from './routingModule/routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blogComponent/blog.component';
import { LoginComponent } from './loginComponent/login.component';
import { SignupComponent } from './signUpComponent/sign-up.component';
import { CreateBlogComponent } from './createBlogComponent/create-blog.component';
import { BlogDetailComponent } from './blogDetailComponent/blog-detail.component';
import { CommentComponent } from './commentComponent/comment.component';

import { CKEditorModule } from 'ng2-ckeditor';
import { AppService } from './app.service';



@NgModule({
  declarations: [
    AppComponent,BlogComponent,LoginComponent,SignupComponent,CreateBlogComponent,BlogDetailComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,FormsModule,ReactiveFormsModule,
    HttpModule,HttpClientModule,MaterialModule,FlexLayoutModule,routingModule,CKEditorModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
