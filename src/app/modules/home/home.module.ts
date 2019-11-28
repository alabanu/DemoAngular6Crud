import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './page/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserDetailsComponent } from './page/user-details/user-details.component';
import { UserListComponent } from './page/user-list/user-list.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent, UserDetailsComponent, UserListComponent]
})
export class HomeModule { }
