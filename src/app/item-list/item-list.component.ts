import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { DatafetchingService } from '../datafetching.service';
import capitalizeFirstLetter from "../utils/stringUtils"

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Item[] = [{id:"001-beetroot.svg", name: "test1", price: 5},{id:"002-carrot.svg", name: "test2", price: 2}]
  capitalizeFirstLetter = capitalizeFirstLetter

  constructor(private DatafetchingService: DatafetchingService) {}

  ngOnInit(): void {
    this.DatafetchingService.getData().subscribe(
      (res: any) => {this.items = res;}, (error: any) => {
        console.error("Error retrieving data:", error)
      }
    )
  }
}
