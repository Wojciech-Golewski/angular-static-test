import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './core/components/main/main.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
  { path: 'shop', loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
