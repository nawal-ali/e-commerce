import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'https://www.mocky.io/v2/your-mocky-url'; // استبدلي `your-mocky-url` بالرابط بتاعك

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
export interface product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

