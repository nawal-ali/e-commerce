import { Component } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-accessories',
  standalone: false,
  templateUrl: './accessories.component.html',
  styleUrl: './accessories.component.css'
})
export class AccessoriesComponent {
    acc:any;
          constructor(public productService:ProductService){
            this.productService.getAccessoriesCategory().subscribe(res=>{
              this.acc = res.data;
            })
          }
}
