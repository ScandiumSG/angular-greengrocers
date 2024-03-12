import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment.development';
import { Item } from './models/item';

@Injectable({
  providedIn: 'root'
})
export class DatafetchingService {
  private baseUrl = environment.apiUrl

  constructor(private http: HttpClient) { }
  
  getData(): Observable<Item[]> {
    return this.http.get<Item[]>(this.baseUrl);
  }
}
