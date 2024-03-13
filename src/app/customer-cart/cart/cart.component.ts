import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/item';
import { CartServiceService } from '../cart-service.service';
import { Router } from '@angular/router';
import capitalizeFirstLetter from 'src/app/utils/stringUtils';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartInventory: CartItem[] = [];
  increment: (item: CartItem) => void;
  decrement: (item: CartItem) => void;

  capitalizeName = capitalizeFirstLetter

  constructor(private cartService: CartServiceService, private router: Router) {
    this.increment = this.cartService.incrementQuantity.bind(this.cartService);
    this.decrement = this.cartService.decrementQuantity.bind(this.cartService); 
  }

  ngOnInit(): void {
    this.cartService.items.subscribe((items) => {
      this.cartInventory = items
    })
  }

  navigateToStore() {
    this.router.navigateByUrl('')
  }
}