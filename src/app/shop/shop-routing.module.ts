import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableMainComponent } from './components/table-main/table-main.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'table',
        component: TableMainComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
