import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopMainComponent } from './components/shop-main/shop-main.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ShopMainComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule
  ]
})
export class ShopModule { }
