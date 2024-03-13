import { Component } from '@angular/core';
import { DatafetchingService } from '../datafetching.service';

@Component({
  selector: 'app-items-filtering',
  templateUrl: './items-filtering.component.html',
  styleUrls: ['./items-filtering.component.css']
})
export class ItemsFilteringComponent {

  constructor(private fetchingService: DatafetchingService) {}

  sort(value: string, bool: boolean = true) {
    this.fetchingService.setSort(value, bool);
    this.fetchingService.fetchData();
  }

  filter(value: string) {
    this.fetchingService.setFilter(value);
    this.fetchingService.fetchData();
  }
}
