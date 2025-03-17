import { Component, Input } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-large-banner',
  standalone: false,
  templateUrl: './large-banner.component.html',
  styleUrl: './large-banner.component.css'
})
export class LargeBannerComponent {
  @Input() bannerTitle : string ='';
  @Input() bannerDesc : string ='';
  @Input() bannerButton : string ='';
  @Input() bannerCategory : string ='';
  @Input() bannerImg : string ='';
  @Input() bannerRouterLink : string ='';
  @Input() showCounter : boolean =false;
  @Input() bg_color : string ='';
  @Input() text_color : string ='';
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
}
