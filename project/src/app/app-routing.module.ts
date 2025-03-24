import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DesktopComponent } from './pages/desktop/desktop.component';
import { LaptopComponent } from './pages/laptop/laptop.component';
import { MonitorComponent } from './pages/monitor/monitor.component';
import { TvComponent } from './pages/tv/tv.component';
import { GamingComponent } from './pages/gaming/gaming.component';
import { BluetoothSpeakerComponent } from './pages/bluetooth-speaker/bluetooth-speaker.component';
import { AccessoriesComponent } from './pages/accessories/accessories.component';
import { CartComponent } from './pages/cart/cart.component';
import { FavComponent } from './pages/fav/fav.component';
import { ProductCategoryComponent } from './shared/components/product-category/product-category.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:"home/:productId", component:ProductDetailsComponent},
  { path: ':category', component: ProductCategoryComponent },
  { path: '**', redirectTo: '' },
  {path:"cart",component:CartComponent},
  {path:"favorite",component:FavComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
