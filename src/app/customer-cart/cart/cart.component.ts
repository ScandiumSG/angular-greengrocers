import { Component } from '@angular/core';
import { CartItem } from 'src/app/models/item';
import { CartServiceService } from '../cart-service.service';
import { Router } from '@angular/router';
import capitalizeFirstLetter from 'src/app/utils/stringUtils';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartInventory: CartItem[] = [];
  increment: (item: CartItem) => void;
  decrement: (item: CartItem) => void;

  capitalizeName = capitalizeFirstLetter

  constructor(private cartService: CartServiceService, private router: Router) {
    this.cartService.items.subscribe((items) => {
      this.cartInventory = items
    })
    
    this.increment = this.cartService.incrementQuantity.bind(this.cartService);
    this.decrement = this.cartService.decrementQuantity.bind(this.cartService); 
  }

  navigateToStore() {
    this.router.navigateByUrl('')
  }
}