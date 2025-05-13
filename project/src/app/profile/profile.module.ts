import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { UserDataComponent } from './pages/user-data/user-data.component';
import { UserPrevOrdersComponent } from './pages/user-prev-orders/user-prev-orders.component';


@NgModule({
  declarations: [
    ProfileComponent,
    UserDataComponent,
    UserPrevOrdersComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
