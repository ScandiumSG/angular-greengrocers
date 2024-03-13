import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items/items.component';
import { ItemsFilteringComponent } from './items-filtering/items-filtering.component';
import { ItemlistComponent } from './itemlist.component';



@NgModule({
  declarations: [
    ItemsComponent,
    ItemsFilteringComponent,
    ItemlistComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ItemsComponent,
    ItemsFilteringComponent
  ]
})
export class ItemListModule { }
