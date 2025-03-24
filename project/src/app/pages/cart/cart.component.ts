import { Component } from '@angular/core';
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}
@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  
  cartItems: Product[] = [
    { id: 1, name: 'Product 1', price: 29.99, quantity: 1, image: 'path_to_image1' },
    { id: 2, name: 'Product 2', price: 49.99, quantity: 2, image: 'path_to_image2' },
    { id: 3, name: 'Product 3', price: 19.99, quantity: 1, image: 'path_to_image3' },
    { id: 4, name: 'Product 4', price: 17.99, quantity: 1, image: 'path_to_image4' }
  ];

  
  addToCart(item: Product): void {
    const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({ ...item, quantity: 1 });
    }
    console.log(this.cartItems); 
  }

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
