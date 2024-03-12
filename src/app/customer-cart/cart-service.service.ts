import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  private cartItems = new BehaviorSubject<Item[]>([]);
  items = this.cartItems.asObservable();

  getCartPrice() {
    return this.cartItems.value.reduce((total, currentItem) => {return total + currentItem.price}, 0)
  }
}
