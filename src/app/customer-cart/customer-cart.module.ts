import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPriceComponent } from './total-price/total-price.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    TotalPriceComponent,
    CartComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TotalPriceComponent,
    CartComponent,
  ]
})
export class CustomerCartModule { }
