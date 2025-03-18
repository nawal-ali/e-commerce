import { Component } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products :any =[];
  numOfItems:number =0;
  dailySaleProducts:any =[];
    constructor(private product:ProductService){
      product.getProducts().subscribe(res=>{
        this.dailySaleProducts = res.filter((f: any) => f.dailySale === true);
        
      })
    }

slider1=[
  {img:'./imgs/gameing.png',body:'gaming',routerlink:'/gaming'},
  {img:'./imgs/tv.png' ,body:'tv' ,routerlink:'/tv'},
  {img:'./imgs/laptop.png',body:'laptop',routerlink:'/laptop'},
  {img:'./imgs/speaker.png',body:'blutooth-speaker' ,routerlink:'/speaker'},
  {img:'./imgs/monitors.png',body:'monitors' ,routerlink:'/monitor'},
]


addItem(){
  this.numOfItems+=1;
}
removeItem(){
  if(this.numOfItems>0){
    this.numOfItems-=1;
  }
}


// slideConfig = {
//   slidesToShow: 2,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   pauseOnHover: true, 
//   dots: true,
//   infinite: true,
//   responsive: [
//     {
//       breakpoint: 1500,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//       }
//     },
//     {
//       breakpoint: 800,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//   ]
// };


// slickInit(e:any) {
//   console.log('slick initialized');
// }

// breakpoint(e:any) {
//   console.log('breakpoint');
// }

// getStars(x:number): number[]{
//   return Array((Math.floor(x))).fill(0);
// }
}

