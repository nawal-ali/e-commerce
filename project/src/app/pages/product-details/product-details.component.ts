import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../shared/services/product.service';
import { tick } from '@angular/core/testing';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  constructor(private activated: ActivatedRoute,private productService: ProductService,private spinner: NgxSpinnerService){}
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
