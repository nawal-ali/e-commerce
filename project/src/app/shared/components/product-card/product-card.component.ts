import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-card',
  standalone: false,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  products:any;
  numOfItems :number=0;
  getStars(x:number): number[]{
    return Array((Math.floor(x))).fill(0);
  }
  constructor(private product :ProductService){
    this.product.getProducts().subscribe(res=>{
      this.products = res.data
    }
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
