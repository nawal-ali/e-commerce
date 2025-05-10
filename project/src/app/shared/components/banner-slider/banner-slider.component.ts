import { Component,Input } from '@angular/core';
import { ProductService } from '../../services/product.service';
// import { SlickCarouselModule } from 'ngx-slick-carousel';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
// import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-banner-slider',
  standalone: false,
  templateUrl: './banner-slider.component.html',
  styleUrl: './banner-slider.component.css'
})
export class BannerSliderComponent {
  @Input() dailySales:boolean = false;
  @Input() monthSales:boolean = false;
  @Input() category:boolean = false;
  @Input() slides: any[] = [];
  priceAfterDiscount:{[key:number]: number}={};
  products:any[] = [];
  x!:number;
  constructor(private product:ProductService){
    this.product.getProducts().subscribe(res=>{
      console.log("this is res from banner slider"+res);
      this.products = res.data;
      this.products.map(item =>{
        if(item.discount>0){
        this.x = item.price - ((item.discount / 100) * item.price);
        this.priceAfterDiscount[item.product_id] = Math.floor(this.x);
      }
      })
      console.log("this is price"+this.priceAfterDiscount);
    })
  }
  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "autoplay":true,
    "autoplaySpeed":3000,
    "pauswOnHovere": true,
    "dots":true,
    "infinite":true,
    "responsive":[
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  slideConfig2 = {
    slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  dots: true,
  infinite: true,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  };

  slideConfig3 = {
    "slidesToShow": 4,
    "slidesToScroll": 2,
    "autoplay":true,
    "autoplaySpeed":3000,
    "pauswOnHovere": true,
    "dots":true,
    "infinite":true,
    "responsive":[
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  slickInit(e:any) {
    console.log('slick initialized');
  }
  
  breakpoint(e:any) {
    console.log('breakpoint');
  }

  // getStars(x:number): number[]{
  //   return Array((Math.floor(x))).fill(0);
  // }
}
