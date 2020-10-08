import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { UserService } from '../service/userservice';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent  {

  user: User;
  userId: number;

  constructor(private service:UserService) { }

  updateUser(form: any) {
    let data = form.value;
    let id = form.value;
    let userRole=data.userRole;
    let userName=data.userName;
    let password=data.password; 
    this.user = new User(userRole, userName, password);
    let successFun = (userArg: User) => {
      this.user = userArg;
      alert("update successfully")
    };
    let errFun = err => {
      console.log("err in addtestcomponent " + err.message);
    }

    let observable:Observable<User> =this.service.updateUser(id);
    observable.subscribe(successFun, errFun);
    //alert("user add successfully")
  }

}
