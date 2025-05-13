import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiUrl = 'http://localhost:3000/cart';

  constructor(private http: HttpClient) {}

  addToCart(cartBody:any) {
    return this.http.post(`${this.apiUrl}/add`, cartBody);
  }

  getCart(userId: any) {
    return this.http.get<any>(`${this.apiUrl}/${userId}`);
  }
}

