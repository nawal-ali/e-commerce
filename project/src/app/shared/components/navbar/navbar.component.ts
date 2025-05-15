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
  this.showAlert('Loged out successful! hope to see you soon ', 'warning');
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
