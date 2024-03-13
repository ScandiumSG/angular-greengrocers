import { Component } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-total-price',
  templateUrl: './total-price.component.html',
  styleUrls: ['./total-price.component.css']
})
export class TotalPriceComponent {
  totalCost: number = 0;

  constructor(private cartService: CartServiceService) {
    this.cartService.totalCost.subscribe((cost) => {this.totalCost = cost})
  }

}
