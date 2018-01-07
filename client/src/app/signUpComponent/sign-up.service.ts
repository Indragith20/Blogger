import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()

export class SignUpService{
    constructor(private http:HttpClient){

    }

    addPost(formDetails:any){
        var headers = new HttpHeaders();
        
         headers.append('Content-type','application/json');
         //headers.append('Authorization',this.token);
        // let options=new RequestOptions({headers:headers});
        return this.http.post('http://localhost:4000/api/login/newuser',formDetails,{headers})
                .map(response => response);
    }
}