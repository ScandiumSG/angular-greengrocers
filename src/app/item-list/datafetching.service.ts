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
  
  private groceryItems = new BehaviorSubject<Item[]>([])
  items = this.groceryItems.asObservable();

  constructor(private http: HttpClient) { }
  
  async fetchData(): Promise<void>{
    if (this.filterType !== "all") {
      await firstValueFrom(this.http.get<Item[]>(this.baseUrl+`?type=${this.filterType}`))
        .then((res) => this.groceryItems.next([...res]))
    } else {
      await firstValueFrom(this.http.get<Item[]>(this.baseUrl))
        .then((res) => this.groceryItems.next([...res]));
    }
  }

  setFilter(type: string) {
    this.filterType = type;
  }
}
