import { Component } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-accessories',
  standalone: false,
  templateUrl: './accessories.component.html',
  styleUrl: './accessories.component.css'
})
export class AccessoriesComponent {
    acc:any;
          constructor(public productService:ProductService,private spinner: NgxSpinnerService){
            this.productService.getAccessoriesCategory().subscribe(res=>{
              this.spinner.show();
              this.acc = res.data;
            },()=>{},()=>{this.spinner.hide();})
          }
}
