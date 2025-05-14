import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  searchQuery: string = '';
searchResults: any[] = [];

  constructor(public cartService: CartService,private productService: ProductService){
    console.log("cart lenght: "+this.cartService.cartlength);
  }

  onSearch() {
  if (this.searchQuery.trim().length > 0) {
    this.productService.searchProducts(this.searchQuery).subscribe(res => {
      this.searchResults = res.data;
    });
  } else {
    this.searchResults = [];
  }
}
}
