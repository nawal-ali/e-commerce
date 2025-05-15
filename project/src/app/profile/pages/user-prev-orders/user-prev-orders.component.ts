import { Component } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-user-prev-orders',
  standalone: false,
  templateUrl: './user-prev-orders.component.html',
  styleUrl: './user-prev-orders.component.css'
})
export class UserPrevOrdersComponent {
  id :any;
  orders :any;
  message:any;
  constructor(public userServic: UserService){
    this.id = localStorage.getItem('id');
    this.userServic.getUserPrevOrders(this.id).subscribe(res => {
      if(res){
                  if (res.message) {
            // This means no orders found
            this.message = res.message;
            this.orders = [];
          } else {
            this.orders = res;
            this.message = '';
          }
        // this.orders = res
        // console.log('items from res');
      }
    })
  }
}
