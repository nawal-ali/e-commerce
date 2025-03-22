import { Component, OnInit } from '@angular/core';
import { CartService } from '../\../shared/services/cart.service'; // استدعاء الـ CartService
import { Product } from './models/product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Product[] = [];
  isCartOpen: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.getCartProducts();
  }

  getCartProducts() {
    this.cartService.getProducts().subscribe((data: Product[]) => {  // تحديد نوع البيانات المستلمة
      this.products = data.map((product: Product) => ({  // تحديد نوع الـ product
        ...product,
        quantity: 1  // تعيين الكمية الافتراضية
      }));
    });
  }

  toggleCart() {
    this.isCartOpen =!this.isCartOpen;
  }

  increaseQuantity(product: Product) {
    product.quantity++;
  }

  decreaseQuantity(product: Product) {
    if (product.quantity > 1) {
      product.quantity--;
    }
  }

  removeFromCart(product: Product) {
    this.products = this.products.filter(p => p !== product);
  }
}


