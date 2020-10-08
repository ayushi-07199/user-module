import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { UserService } from '../service/userservice';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent  {

  user:User;
  constructor(private service:UserService) { }

  findUserById(form:any){
    let data = form.value;
    let id = data.userId;
   let observable:Observable<User>= this.service.getUserById(id);
   observable.subscribe(
     userArg=>{this.user=userArg},
     error=>{console.log("error inside user details component"+error.message)}
   ); 
  }
}
