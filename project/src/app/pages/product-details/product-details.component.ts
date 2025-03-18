import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  constructor(private activated: ActivatedRoute,private productService: ProductService){}
  single:any;
  ngOnInit(){
    const id = this.activated.snapshot.paramMap.get('productId');
    this.productService.getSingleProduct(id).subscribe(res => {
      this.single = res;
      // console.log(res);
    })
  }

}
