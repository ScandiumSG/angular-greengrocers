import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from '../customer-cart/cart-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit, OnDestroy {
  numberOfItems: number = 0;
  private cartItemsSubscription: Subscription = new Subscription;

  constructor(private router: Router, private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.cartService.items.subscribe((items) => {
      this.numberOfItems = items.reduce((count, item) => count + item.quantity, 0)
    });
  }

  ngOnDestroy(): void {
    this.cartItemsSubscription.unsubscribe();
  }

  navigateToCart() {
    this.router.navigateByUrl('/checkout')
  }
}
