import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/item';
import { ItemPickingService } from '../item-picking.service';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);
  items = this.cartItems.asObservable();

  private cartCost = new BehaviorSubject<number>(0);
  totalCost = this.cartCost.asObservable();

  constructor(private itemPicker: ItemPickingService) {
    this.cartItems.next([])
    this.itemPicker.currentItem.subscribe((item) => {
      if (item.id === "") {return;}

      const itemExistsInCart = this.cartItems.value.filter((i) => i.name === item.name)[0]
      if (itemExistsInCart) {
        this.incrementQuantity(itemExistsInCart)
      } else {
        const newItem: CartItem = {...item, quantity: 1}
        this.cartItems.next([...this.cartItems.value, newItem])
      }

      this.updateCartPrice()
    })
  }

  incrementQuantity(item: CartItem): void {
    const itemsInCart = this.cartItems.value;
    const cartItem = itemsInCart.filter((i) => i.name === item.name)[0]
    cartItem.quantity = cartItem.quantity + 1
    this.cartItems.next([...itemsInCart])
    this.updateCartPrice()
  }

  decrementQuantity(item: CartItem): void {
    const itemsInCart = this.cartItems.value;
    const cartItem = itemsInCart.filter((i) => i.name === item.name)[0]
    cartItem.quantity = cartItem.quantity - 1

    // Remove cartItem if quanity reach 0
    if (cartItem.quantity <= 0) {
      itemsInCart.splice(itemsInCart.indexOf(cartItem), 1)
    }
    this.cartItems.next([...itemsInCart])
    this.updateCartPrice()
  }

  updateCartPrice() {
    this.cartCost.next(this.cartItems.value.reduce((total, currentItem) => {return total + (currentItem.price * currentItem.quantity)}, 0))
  }
}
