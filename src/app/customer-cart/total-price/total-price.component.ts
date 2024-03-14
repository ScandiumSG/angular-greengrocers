import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-total-price',
  templateUrl: './total-price.component.html',
  styleUrls: ['./total-price.component.css']
})
export class TotalPriceComponent implements OnInit, OnDestroy {
  totalCost: number = 0;
  private totalCostSubscription: Subscription = new Subscription;

  constructor(private cartService: CartServiceService) {}

  ngOnInit(): void {
    this.totalCostSubscription = this.cartService.totalCost.subscribe((cost) => {this.totalCost = cost})
  }

  ngOnDestroy(): void {
    this.totalCostSubscription.unsubscribe();
  }
}
