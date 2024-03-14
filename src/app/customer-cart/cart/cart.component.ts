import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartItem } from 'src/app/models/item';
import { CartServiceService } from '../cart-service.service';
import { Router } from '@angular/router';
import capitalizeFirstLetter from 'src/app/utils/stringUtils';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  cartInventory: CartItem[] = [];
  private cartSubscription: Subscription = new Subscription;
  increment: (item: CartItem) => void;
  decrement: (item: CartItem) => void;

  capitalizeName = capitalizeFirstLetter

  constructor(private cartService: CartServiceService, private router: Router) {
    this.increment = this.cartService.incrementQuantity.bind(this.cartService);
    this.decrement = this.cartService.decrementQuantity.bind(this.cartService); 
  }

  ngOnInit(): void {
    this.cartSubscription = this.cartService.items.subscribe((items) => {
      this.cartInventory = items
    })
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
  }

  navigateToStore() {
    this.router.navigateByUrl('')
  }
}