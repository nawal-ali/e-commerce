import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-card',
  standalone: false,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  products:any = [];
  constructor(public product :ProductService){
    this.product.getProducts().subscribe((res:any) =>
      this.products.push(res)
    )
  }
}
