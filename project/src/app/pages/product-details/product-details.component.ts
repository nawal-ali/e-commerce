import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../shared/services/product.service';
import { tick } from '@angular/core/testing';
import { NgxSpinnerService } from 'ngx-spinner';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  constructor(private activated: ActivatedRoute,private productService: ProductService,private spinner: NgxSpinnerService,public cartService:CartService){}
  // rate :any[] = [];
  // product: any;
  // ngOnInit(){
  //   const id =  this.activated.snapshot.paramMap.get('id');
  //   if(id){
  //     this.productService.getSingleProduct(id).subscribe(res => {
  //       this.product = res.data;
  //       console.log('Product:', this.product);
  //       //reting array
  //       this.rate = Array(Math.floor(this.product.rating)).fill(0);
  //     });
  //   }
  // }
  rate: any[] = [];
  product: any;

  addToCart(productId1: any) {
  const userId1 = localStorage.getItem('id'); // normally get this from auth/localStorage
  const cartBody = {
    userId:userId1,
    productId:productId1,
    quantity: 1
  };
  this.cartService.addToCart(cartBody).subscribe(() => {
    console.log('Added to cart!');
    this.showAlert('Added to cart!', 'success');
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
  ngOnInit() {
    this.spinner.show();
    this.activated.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.productService.getSingleProduct(id).subscribe(res => {
          this.product = res.data;
          console.log('Product:', this.product);
          // re-calculate stars rating array
          this.rate = Array(Math.floor(this.product.rating)).fill(0);
        },()=>{},()=>{this.spinner.hide();});
      }
    });
  }
}
