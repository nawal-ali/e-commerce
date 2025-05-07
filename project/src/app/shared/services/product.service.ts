import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://run.mocky.io/v3/2c0ebbbb-f726-4334-9fe8-b6bdf17cb34a';
  private selectedCategory = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  setSelectedCategory(category: string): void {
    this.selectedCategory.next(category);
  }

  getSelectedCategory(): Observable<string> {
    return this.selectedCategory.asObservable();
  }
}
