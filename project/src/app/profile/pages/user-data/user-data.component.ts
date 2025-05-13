import { Component } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-user-data',
  standalone: false,
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.css'
})
export class UserDataComponent {
  id = '681e12177c4dff4989d42c20';
  firstName:any;
  lastName:any;
  email:any;
  constructor(public userService:UserService){
    this.userService.getUserData(this.id).subscribe(res =>{
      if(res){
      this.firstName = res.data.firstName;
      this.lastName = res.data.lastName;
      this.email = res.data.email;
      }
      else console.log('error while fetchin user data');
    }
    )
  }
}
