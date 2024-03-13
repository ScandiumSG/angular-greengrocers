import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';
import { DatafetchingService } from '../datafetching.service';
import capitalizeFirstLetter from "../../utils/stringUtils"
import { ItemPickingService } from 'src/app/item-picking.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[] = [{id:"001-beetroot.svg", name: "test1", price: 5},{id:"002-carrot.svg", name: "test2", price: 2}]
  capitalizeFirstLetter = capitalizeFirstLetter

  constructor(private DatafetchingService: DatafetchingService, private itemPicker: ItemPickingService) {}

  ngOnInit() {
    this.DatafetchingService.fetchData();
    this.DatafetchingService.items.subscribe((groceryItems) => {
      this.items = [...groceryItems]
    })
  }

  addItemToCart(item: Item): void {
    this.itemPicker.setItem(item);
  }
}