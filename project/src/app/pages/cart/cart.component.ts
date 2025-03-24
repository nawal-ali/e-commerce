import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems = [
    { name: 'Product 1', price: 29.99, quantity: 1, image: '..' },
    { name: 'Product 2', price: 49.99, quantity: 2, image: 'https://via.placeholder.com/60' },
    { name: 'Product 3', price: 19.99, quantity: 1, image: 'https://via.placeholder.com/60' },
    { name: 'Product 4', price: 17.99, quantity: 1, image: 'https://via.placeholder.com/60' }
  ];

  increaseQuantity(index: number): void {
    this.cartItems[index].quantity++;
  }

  decreaseQuantity(index: number): void {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity--;
    }
  }

  removeItem(index: number): void {
    this.cartItems.splice(index, 1);
  }
  getSubtotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
