import { Component } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-user-prev-orders',
  standalone: false,
  templateUrl: './user-prev-orders.component.html',
  styleUrl: './user-prev-orders.component.css'
})
export class UserPrevOrdersComponent {
  id = '681e12177c4dff4989d42c20';
  orders :any;
  constructor(public userServic: UserService){
    this.userServic.getUserPrevOrders(this.id).subscribe(res => {
      if(res){
        this.orders = res
        console.log('items from res');
      }
    })
  }
}
