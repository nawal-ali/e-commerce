import { Component } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products :any =[];
  all:boolean = true;
  Laptop_Desktop:boolean = false;
  Gaming:boolean = false;
  Monitors:boolean = false;
  numOfItems:number = 0;
  dailySaleProducts:any =[];
  monthSaleProducts:any =[];
  monthSale_laptopProducts:any =[];
  monthSale_gamingProducts:any =[];
  monthSale_monitorProducts:any =[];

    constructor(private product:ProductService ,private spinner: NgxSpinnerService){
    this.spinner.show();
      this.product.getProducts().subscribe(res=>{
        if(res){
        this.products = res.data;
        console.log('res from home  ' +this.products );
        this.dailySaleProducts = this.products.filter((f: any) => f.dailySale === true);
        this.monthSaleProducts = this.products.filter((f: any) => f.monthSale === true);
        this.monthSale_laptopProducts = this.products.filter((f: any) => f.monthSale === true && f.category === "laptop"|| f.category === "Desktop");
        this.monthSale_gamingProducts = this.products.filter((f: any) => f.monthSale === true && f.category === "gaming");
        this.monthSale_monitorProducts = this.products.filter((f: any) => f.monthSale === true && f.category === "gv");
      }
      else{console.log('error from home ');}
      },()=>{},()=>{this.spinner.hide();})
    }


  //     ngOnInit() {
  //   this.spinner.show();
  //   setTimeout(() => {
  //     this.spinner.hide();
  //   }, 5000);
  // }

slider1=[
  {img:'./imgs/gameing.png',body:'gaming',routerlink:'/gaming'},
  {img:'./imgs/tv.png' ,body:'tv' ,routerlink:'/tvs'},
  {img:'./imgs/laptop.png',body:'laptop',routerlink:'/laptop'},
  {img:'./imgs/speaker.png',body:'blutooth-speaker' ,routerlink:'/bluetoothSpeaker'},
  {img:'./imgs/monitors.png',body:'monitors' ,routerlink:'/monitor'},
]

allClick(){
  this.Laptop_Desktop = false;
  this.Gaming= false;
  this.Monitors = false;
  this.all = true;
}
laptopClick(){
  this.Gaming= false;
  this.all = false;
  this.Monitors = false;
  this.Laptop_Desktop = true
}
gamingClick(){
  this.Laptop_Desktop = false;
  this.all = false;
  this.Monitors = false;
  this.Gaming= true;
}
monitorClick(){
  this.Laptop_Desktop = false;
  this.all = false;
  this.Gaming= false;
  this.Monitors = true;
}
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

