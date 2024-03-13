import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, firstValueFrom } from "rxjs";
import { environment } from 'src/environments/environment.development';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class DatafetchingService {
  private baseUrl = environment.apiUrl
  private filterType: string = "all";
  private sortBy: string = "";
  private sortAsc: boolean = true;

  private groceryItems = new BehaviorSubject<Item[]>([])
  items = this.groceryItems.asObservable();

  constructor(private http: HttpClient) { }
  
  async fetchData(): Promise<void>{
    let data: Item[]
    if (this.filterType !== "all") {
      data = await firstValueFrom(this.http.get<Item[]>(this.baseUrl+`?type=${this.filterType}`))
    } else {
      data = await firstValueFrom(this.http.get<Item[]>(this.baseUrl))
    }

    if (this.sortBy === "name") {
      this.sortAsc ? data.sort((a,b) => {return a.name.localeCompare(b.name)}) : data.sort((a,b) => {return b.name.localeCompare(a.name)});
    } else if (this.sortBy === "price") {
      this.sortAsc ? data.sort((a,b) => a.price - b.price) : data.sort((a,b) => b.price - a.price);
    }

    this.groceryItems.next([...data])
  }

  setSort(type: string, asc: boolean) {
    this.sortBy = type;
    this.sortAsc = asc;
  }

  setFilter(type: string) {
    this.filterType = type;
  }
}
