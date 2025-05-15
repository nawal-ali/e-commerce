import { Component } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-bluetooth-speaker',
  standalone: false,
  templateUrl: './bluetooth-speaker.component.html',
  styleUrl: './bluetooth-speaker.component.css'

})
export class BluetoothSpeakerComponent {
    speaker:any;
            constructor(public productService:ProductService,private spinner: NgxSpinnerService,private cartService : CartService){
              this.productService.getSpeakerCategory().subscribe(res=>{
                this.spinner.show();
                this.speaker = res.data;
              },()=>{},()=>{this.spinner.hide();})
            }

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
}
