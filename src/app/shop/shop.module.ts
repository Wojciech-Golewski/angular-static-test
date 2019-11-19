import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatDefaultTableComponent } from './components/mat-default-table/mat-default-table.component';
import { MatTabFromServiceComponent } from './components/mat-tab-from-service/mat-tab-from-service.component';
import { TableMainComponent } from './components/table-main/table-main.component';


@NgModule({
  declarations: [
    TableMainComponent,
    MatDefaultTableComponent,
    MatTabFromServiceComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule
  ]
})
export class ShopModule { }
