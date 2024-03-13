import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent {

  constructor(private router: Router) { }
  navigateToCart() {
    this.router.navigateByUrl('/cart')
  }
}
