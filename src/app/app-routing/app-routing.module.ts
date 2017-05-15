import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ItemsModule} from '../items/items.module';
import { ItemModule} from '../item/item.module';
import { CartComponent } from "app/shared/cart/cart.component";
import { PageNotFoundComponent } from "app/page-not-found/page-not-found.component";

// Route Configuration
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/items',
    pathMatch: 'full'
  },
  {
    path:'item/:isbn',
    loadChildren: '../item/item.module#ItemModule'
    
  },
  {
   	path: 'items',
    loadChildren: '../items/items.module#ItemsModule'
  },
  {
   	path: 'cart',
    component: CartComponent
   },
   {
     path:'**',
     component: PageNotFoundComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }