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
  numOfItems :number=0;
  // stars =[1,2,3,4,5];
  constructor(private product :ProductService){
    this.product.getProducts().subscribe(res=>{
      this.products = res}
    )
  }
  addItem(){
    this.numOfItems+=1;
  }
  removeItem(){
    if(this.numOfItems>0){
      this.numOfItems-=1;
    }
  }
}
