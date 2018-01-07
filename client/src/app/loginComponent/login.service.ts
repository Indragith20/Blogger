import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable()

export class LoginService{
    constructor(private http:HttpClient){}

    login(loginDetails:any){
        var headers = new HttpHeaders();
        headers.append('content-type','application/json');

        return this.http.post('http://localhost:4000/api/login/existingUser',loginDetails,{headers})
    }
}
