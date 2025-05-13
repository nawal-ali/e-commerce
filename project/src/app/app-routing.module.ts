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
<<<<<<< HEAD
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/sign up/signup.component';
import { ForgetPasswordComponent } from './pages/forget password/forgetpassword';

const routes: Routes = [
  {path:"", component:HomeComponent},
    {path:"desktop", component:DesktopComponent},
    {path:"laptop",component:LaptopComponent},
    {path:"monitor",component:MonitorComponent},
    {path:"tv", component:TvComponent},
    {path:"gaming",component:GamingComponent},
    {path:"speaker", component:BluetoothSpeakerComponent},
    {path:"accessories", component:AccessoriesComponent},
    {path:"cart",component:CartComponent},
    {path:"favorite",component:FavComponent},
    {path:"login",component:LoginComponent},
    { path: 'signup', component: SignupComponent },
    { path: 'forget-password', component: ForgetPasswordComponent }

];
=======
// import { ProductCategoryComponent } from './shared/components/product-category/product-category.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:"product/:id", component:ProductDetailsComponent},
  // { path: ':category', component: ProductCategoryComponent },
  // { path: '**', redirectTo: '' },
  {path:"cart",component:CartComponent},
  {path:"favorite",component:FavComponent},
  {path:"desktop",component:DesktopComponent},
  {path:"monitor",component:MonitorComponent},
  {path:"laptop",component:LaptopComponent},
  {path:"tvs",component:TvComponent},
  {path:"gaming",component:GamingComponent},
  {path:"bluetoothSpeaker",component:BluetoothSpeakerComponent},
  {path:"accessories",component:AccessoriesComponent},
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
]
>>>>>>> 9f70ecabe41b040f5a6686380635f489059eb7da

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
