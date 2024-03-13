import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from './models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemPickingService {
  private item: BehaviorSubject<Item> = new BehaviorSubject<Item>({id: "", name: "", price: 0});
  currentItem = this.item.asObservable();

  constructor() { }

  setItem(item: Item) {
    this.item.next(item)
  }
}
