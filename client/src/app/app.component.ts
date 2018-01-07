import { Component } from '@angular/core';
import { AppService } from './app.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user:User;

  constructor(public appService:AppService){
    //console.log(this.appService.getUser());
    this.user = this.appService.getUser();
  }

  ngOnInit(){}

}
