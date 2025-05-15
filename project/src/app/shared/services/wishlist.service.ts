import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

 private baseUrl = 'http://localhost:3000/fav'; // Update if needed

  constructor(private http: HttpClient) {}

  //to add to fav
  addToFavorites(userId: any, productId: any) {
    return this.http.post(this.baseUrl, { userId, productId });
  }
  //remove from fav
  removeFromFavorites(userId: any, productId: any) {
    return this.http.delete(`${this.baseUrl}/${productId}?userId=${userId}`);
  }
  //get all fav
  getFavorites(userId: any) {
    return this.http.get<any>(`${this.baseUrl}?userId=${userId}`);
  }
}
