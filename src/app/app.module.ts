import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemComponent } from './item/item.component';
import { CartComponent } from './cart/cart.component';
import { TotalPriceComponent } from './total-price/total-price.component';

@NgModule({
  declarations: [AppComponent, ItemListComponent, ItemComponent, CartComponent, TotalPriceComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
