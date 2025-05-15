import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  searchQuery: string = '';
searchResults: any[] = [];
userFirstName:any;
id = localStorage.getItem('id')
  constructor(public cartService: CartService,private productService: ProductService, public userService:UserService,private router:Router){
    console.log("cart lenght: "+this.cartService.cartlength);
    this.userService.getUserData(this.id).subscribe(res => {
      this.userFirstName = res.firstName
    })
  }
handleLogOut(){
  this.userService.isLoged = false;
  localStorage.removeItem('token')
  localStorage.removeItem('id')
  this.router.navigateByUrl('/')
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
