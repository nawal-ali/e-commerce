import { Component } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-laptop',
  standalone: false,
  templateUrl: './laptop.component.html',
  styleUrl: './laptop.component.css'
})
export class LaptopComponent {
  laptops:any = [];

  constructor(public productService:ProductService, public cartService:CartService){
    this.productService.getLaptopCategory().subscribe(res=>{
      this.laptops = res.data
    })
  } 
}
