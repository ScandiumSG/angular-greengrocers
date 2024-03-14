import { Component, OnInit, OnDestroy } from '@angular/core';
import { Item } from '../../models/item';
import { DatafetchingService } from '../datafetching.service';
import capitalizeFirstLetter from "../../utils/stringUtils"
import { ItemPickingService } from 'src/app/item-picking.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit, OnDestroy {
  items: Item[] = [{id:"001-beetroot.svg", name: "test1", price: 5},{id:"002-carrot.svg", name: "test2", price: 2}]
  private fetchingSubscription: Subscription = new Subscription;
  capitalizeFirstLetter = capitalizeFirstLetter

  constructor(private DatafetchingService: DatafetchingService, private itemPicker: ItemPickingService) {}

  ngOnInit() {
    this.DatafetchingService.fetchData();
    this.fetchingSubscription = this.DatafetchingService.items.subscribe((groceryItems) => {
      this.items = [...groceryItems]
    })
  }

  ngOnDestroy(): void {
    this.fetchingSubscription.unsubscribe();
  }

  addItemToCart(item: Item): void {
    this.itemPicker.setItem(item);
  }
}