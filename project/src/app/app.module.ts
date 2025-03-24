import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http'; 

=======
>>>>>>> creating-home-page
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesktopComponent } from './pages/desktop/desktop.component';
import { LaptopComponent } from './pages/laptop/laptop.component';
import { TvComponent } from './pages/tv/tv.component';
import { GamingComponent } from './pages/gaming/gaming.component';
import { MonitorComponent } from './pages/monitor/monitor.component';
import { HomeComponent } from './pages/home/home.component';
import { BluetoothSpeakerComponent } from './pages/bluetooth-speaker/bluetooth-speaker.component';
import { AccessoriesComponent } from './pages/accessories/accessories.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { BannerSliderComponent } from './shared/components/banner-slider/banner-slider.component';
import { FavComponent } from './pages/fav/fav.component';
<<<<<<< HEAD
import { ProductCategoryComponent } from './shared/components/product-category/product-category.component';
import { CommonModule } from '@angular/common';
=======
import { provideHttpClient } from '@angular/common/http';
import { LargeBannerComponent } from './shared/components/large-banner/large-banner.component';
import { SharedModule } from './shared/shared.module';
// import { SlickCarouselModule } from 'ngx-slick-carousel';
>>>>>>> creating-home-page

@NgModule({
  declarations: [
    AppComponent,
    DesktopComponent,
    LaptopComponent,
    TvComponent,
    GamingComponent,
    MonitorComponent,
    HomeComponent,
    BluetoothSpeakerComponent,
    AccessoriesComponent,
    CartComponent,
    ProductDetailsComponent,
    NavbarComponent,
    FooterComponent,
    ProductCardComponent,
<<<<<<< HEAD
    BannerSliderComponent,
    FavComponent,
=======
    FavComponent,
    LargeBannerComponent,
    BannerSliderComponent
>>>>>>> creating-home-page
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule ,
    CommonModule
=======
    SharedModule,
    // SlickCarouselModule
  ],
  providers: [
    provideHttpClient(),
>>>>>>> creating-home-page
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
