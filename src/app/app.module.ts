import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { CustomerCartModule } from './customer-cart/customer-cart.module';
import { ItemListModule } from './item-list/item-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, CustomerCartModule, ItemListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
