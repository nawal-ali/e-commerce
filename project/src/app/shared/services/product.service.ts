import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:3000';
  private selectedCategory = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {}


  
  getProducts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/products/all`); 
  }

  setSelectedCategory(category: string): void {
    this.selectedCategory.next(category);
  }

  getSelectedCategory(): Observable<string> {
    return this.selectedCategory.asObservable();
  }

  getSingleProduct(id: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/products/${id}`);
  }
}
