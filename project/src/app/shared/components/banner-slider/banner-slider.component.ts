import { Component,Input } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-banner-slider',
  standalone: true,
  imports: [
    SlickCarouselModule, 
    CommonModule,
    RouterModule 
  ],
  templateUrl: './banner-slider.component.html',
  styleUrl: './banner-slider.component.css'
})
export class BannerSliderComponent {
  @Input() dailySailes:boolean = false;
  @Input() category:boolean = false;
  @Input() slides: any[] = [];
  // @Input() slidesToShow: number = 0;
  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 2,
    "autoplay":true,
    "autoplaySpeed":3000,
    "pauswOnHovere": true,
    "dots":true,
    "infinite":true,
    "responsive":[
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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



  slideConfig2 = {
    "slidesToShow": 2,
    "slidesToScroll": 1,
    "autoplay":true,
    "autoplaySpeed":3000,
    "pauswOnHovere": true,
    "dots":true,
    "infinite":true,
    "responsive":[
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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

  slickInit(e:any) {
    console.log('slick initialized');
  }
  
  breakpoint(e:any) {
    console.log('breakpoint');
  }

  getStars(x:number): number[]{
    return Array((Math.floor(x))).fill(0);
  }
}
