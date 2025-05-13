import { Component } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-desktop',
  standalone: false,
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.css'
})
export class DesktopComponent {
  desktop:any;
  constructor(public productService:ProductService){
    this.productService.getDesktopCategory().subscribe(res=>{
      this.desktop = res.data;
    })
  }
}
