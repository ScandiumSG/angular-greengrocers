import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { CartComponent } from './customer-cart/cart/cart.component';
import { ItemlistComponent } from './item-list/itemlist.component';

const routes: Routes = [
  { path: '', component: ItemlistComponent},
  { path: 'checkout', component: CartComponent}

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
