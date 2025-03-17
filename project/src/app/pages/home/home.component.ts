import { Component } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

    products:any[] =[];
    constructor(private product:ProductService){
      product.getProducts().subscribe(res=>{
        this.products = res.filter((f: any) => f.dailySale === true);
        
      })
    }

slider1=[
  {img:'./imgs/gameing.png',body:'gaming',routerlink:'/gaming'},
  {img:'./imgs/tv.png' ,body:'tv' ,routerlink:'/tv'},
  {img:'./imgs/laptop.png',body:'laptop'},
  {img:'./imgs/speaker.png',body:'blutooth-speaker' ,routerlink:'/speaker'},
  {img:'./imgs/monitors.png',body:'monitors' ,routerlink:'/monitor'},
]
}
