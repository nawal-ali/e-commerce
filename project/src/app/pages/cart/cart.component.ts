import { Component } from '@angular/core';
import { CartService } from '../../shared/services/cart.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartItems: any[] = [];
  id = localStorage.getItem('id')
  constructor(public cartService:CartService,private spinner: NgxSpinnerService,private userService:UserService){
    this.spinner.show();
    this.cartService.getCart(this.id).subscribe(res => {
    if (res && res.items) {
    this.cartItems = res.items;
    this.cartService.cartlength = this.cartItems.length;
  } else {
    this.cartItems = [];
    this.cartService.cartlength = 0;
  }
    },()=>{},()=>{this.spinner.hide();})
  }


  // cartItems: { name: string; price: number; quantity: number; image: string }[] = [
  //   { name: 'Product 1', price: 29.99, quantity: 1, image: 'https://via.placeholder.com/150' },
  //   { name: 'Product 2', price: 49.99, quantity: 2, image: 'https://via.placeholder.com/150' },
  //   { name: 'Product 3', price: 19.99, quantity: 1, image: 'https://via.placeholder.com/150' }
  // ];

  increaseQuantity(index: number): void {
    this.cartItems[index].quantity++;
  }

  decreaseQuantity(index: number): void {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity--;
    }
  }

  // removeItem(index: number): void {
  //   this.cartItems.splice(index, 1);
  // }

  updateQuantity(productId: string, quantity: number) {
  this.cartService.updateItem(this.id, productId, quantity).subscribe(updatedCart => {
    this.cartItems = updatedCart.items;
  });
}

removeItem(productId: string) {
  this.cartService.removeItem(this.id, productId).subscribe(updatedCart => {
    this.cartItems = updatedCart.items;
  });
}

showAlert(message: string, type: 'success' | 'danger' | 'warning') {
    const alert = document.createElement('div');
    alert.className = `alert alert-${type} position-fixed top-0 start-50 translate-middle-x mt-3 shadow`;
    alert.style.zIndex = '9999';
    alert.style.minWidth = '300px';
    alert.innerHTML = `
      <strong>${message}</strong>
    `;
    document.body.appendChild(alert);

    setTimeout(() => {
      alert.remove();
    }, 3000);
  }


  // getTotalPrice(): number {
  //   return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  // }

  checkout(): void {
  const orderItems = this.cartItems.map(item => ({
    productName: item.productId.name,
    quantity: item.quantity,
    price: item.productId.price
  }));

  const totalAmount = orderItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  const orderData = {
    userId: this.id,
    items: orderItems,
    totalAmount: totalAmount
  };

  this.userService.createOrder(orderData).subscribe(
    res => {
      this.showAlert('order is done succeefully ', 'success')
      this.cartItems = [];
      // optionally: clear cart in backend
    },(err) => {
      console.error('Order creation failed:', err);
      alert('Failed to place order.');
    }
  );
}
}



