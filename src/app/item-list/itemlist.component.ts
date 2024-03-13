import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from '../customer-cart/cart-service.service';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit {
  numberOfItems: number = 0;

  constructor(private router: Router, private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.cartService.items.subscribe((items) => {
      this.numberOfItems = items.reduce((count, item) => count + item.quantity, 0)
    });
  }

  navigateToCart() {
    this.router.navigateByUrl('/checkout')
  }
}
