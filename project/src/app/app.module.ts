import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { ProductCategoryComponent } from './shared/components/product-category/product-category.component';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './pages/sign up/signup.component';
import { ForgetPasswordComponent } from './pages/forget password/forgetpassword';
=======
import { LargeBannerComponent } from './shared/components/large-banner/large-banner.component';
import { SharedModule } from './shared/shared.module';
// import { SlickCarouselModule } from 'ngx-slick-carousel';
>>>>>>> 9f70ecabe41b040f5a6686380635f489059eb7da


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
    BannerSliderComponent,
    FavComponent,
<<<<<<< HEAD
    LoginComponent,
    SignupComponent,
    ForgetPasswordComponent
=======
    LargeBannerComponent,
    BannerSliderComponent
>>>>>>> 9f70ecabe41b040f5a6686380635f489059eb7da
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FormsModule
=======
    CommonModule,
    SharedModule,
    // HttpClientModule ,
    // SlickCarouselModule
>>>>>>> 9f70ecabe41b040f5a6686380635f489059eb7da
  ],
  providers: [
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
