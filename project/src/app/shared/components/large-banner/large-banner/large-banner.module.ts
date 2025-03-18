import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LargeBannerComponent } from '../large-banner.component';



@NgModule({
  declarations: [LargeBannerComponent],
  imports: [
    CommonModule
  ],
  exports: [LargeBannerComponent],
})
export class LargeBannerModule { }
