import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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


  updateItem(userId: string, productId: string, quantity: number): Observable<any> {
  return this.http.put<any>(`${this.apiUrl}/${userId}/item/${productId}`, { quantity });
}

removeItem(userId: string, productId: string): Observable<any> {
  return this.http.delete<any>(`${this.apiUrl}/${userId}/item/${productId}`);
}

}

