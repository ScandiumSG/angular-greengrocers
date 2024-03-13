import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { CustomerCartModule } from './customer-cart/customer-cart.module';
import { ItemListModule } from './item-list/item-list.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, CheckoutComponent],
  imports: [BrowserModule, HttpClientModule, CustomerCartModule, ItemListModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
