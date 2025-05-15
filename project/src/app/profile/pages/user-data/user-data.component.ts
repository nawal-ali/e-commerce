import { Component } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-user-data',
  standalone: false,
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.css'
})
export class UserDataComponent {
  id:any;
  constructor(public userService:UserService){
    this.id = localStorage.getItem('id');
    this.userService.getUserData(this.id).subscribe(res =>{
      if(res){
      this.firstName = res.firstName;
      this.lastName = res.lastName;
      this.email = res.email;
    }
      else console.log('error while fetchin user data');
    }
    )
  }
  firstName:any;
  lastName:any;
  email:any;
}
