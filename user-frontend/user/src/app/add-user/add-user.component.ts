import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/userservice';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  user:User;
  message: any;
  constructor(private userService:UserService) { }


  addUser(form: any) {
    let data = form.value;
    let userRole=data.userRole;
      let userName=data.userName;
      let password=data.password; 
    this.user = new User(userRole, userName,  password);
    let successFun = (userArg: User) => {
      this.user = userArg;
    };
    let errFun = err => {
      console.log("err in addtestcomponent " + err.message);
    }

    let observable: Observable<User> = this.userService.addUser(this.user);
    observable.subscribe(successFun, errFun);
    //alert("user add successfully")
  }
}
  

