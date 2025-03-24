import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SlickCarouselModule 
  ],
  exports: [
    SlickCarouselModule
  ]
})
export class SharedModule {
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
