import { Component, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-large-banner',
  standalone: false, 
  templateUrl: './large-banner.component.html',
  styleUrl: './large-banner.component.css'
})
export class LargeBannerComponent {

  products:any[] = [];
  constructor(private product:ProductService){
    this.product.getProducts().subscribe(res=>{
      // console.log(res);
      this.products = res;
    })
  }
  @Input() bannerTitle : string ='';
  @Input() bannerDesc : string ='';
  @Input() bannerButton : string ='';
  @Input() bannerCategory : string ='';
  @Input() bannerImg : string ='';
  @Input() bannerRouterLink : string ='';
  @Input() showCounter : boolean =false;
  @Input() bg_color : string ='';
  @Input() text_color : string ='';
  @Input() product_link:any ;

  get bannerDetails() {
    return{
    title: this.bannerTitle,
    desc: this.bannerDesc,
    button: this.bannerButton,
    category: this.bannerCategory,
    img: this.bannerImg,
    router: this.bannerRouterLink,
  }
  }

  // for the countdown
  targetDate:any = new Date("March 30, 2025 23:59:59").getTime();
  dailySaleCountdown = true;
  days:number = 0;
  hours:number = 0;
  minutes:number = 0;
  seconds:number = 0;
  countDown = setInterval(()=>{
    const now:any = new Date().getTime();
    // console.log("this is now"+now);
    // console.log("thid is target "+ this.targetDate);
    const diff:any = this.targetDate - now;
    console.log("this is diff"+diff);
    this.days = Math.floor(diff/(1000 * 60 * 60 * 24));
    // console.log(this.days);
    this.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((diff % (1000 * 60)) / 1000);
    //if the countdown ended do not show counter
    if (diff < 0) {
      this.dailySaleCountdown = false
      clearInterval(this.countDown); }
  },1000);

}
