import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { CustomerCartModule } from './customer-cart/customer-cart.module';

@NgModule({
  declarations: [AppComponent, ItemListComponent],
  imports: [BrowserModule, HttpClientModule, CustomerCartModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
