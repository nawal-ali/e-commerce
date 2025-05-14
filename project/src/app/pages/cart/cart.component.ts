import { Component } from '@angular/core';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartItems: any[] = [];
  id = "681e12177c4dff4989d42c20"
  constructor(public cartService:CartService){
    this.cartService.getCart(this.id).subscribe(res => {
    if (res && res.items) {
    this.cartItems = res.items;
    this.cartService.cartlength = this.cartItems.length;
  } else {
    this.cartItems = [];
    this.cartService.cartlength = 0;
  }
    })
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


  // getTotalPrice(): number {
  //   return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  // }
}

