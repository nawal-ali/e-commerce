import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { UserDataComponent } from './pages/user-data/user-data.component';
import { UserPrevOrdersComponent } from './pages/user-prev-orders/user-prev-orders.component';

const routes: Routes = [
    { path: '',component: ProfileComponent,children:[
    {path:'user-data', component:UserDataComponent},
    {path:'user-prev-orders', component:UserPrevOrdersComponent},
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
