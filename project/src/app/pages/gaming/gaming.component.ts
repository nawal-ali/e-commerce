import { Component } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-gaming',
  standalone: false,
  templateUrl: './gaming.component.html',
  styleUrl: './gaming.component.css'
})
export class GamingComponent {
    gaming:any;
    constructor(public productService:ProductService){
      this.productService.getGamingCategory().subscribe(res=>{
        this.gaming = res.data;
      })
    }
}
