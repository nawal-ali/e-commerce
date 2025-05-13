import { Component } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-tv',
  standalone: false,
  templateUrl: './tv.component.html',
  styleUrl: './tv.component.css'
})
export class TvComponent {
        tv:any;
        constructor(public productService:ProductService){
          this.productService.getTvCategory().subscribe(res=>{
            this.tv = res.data;
          })
        }
}
