import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/products';
  private selectedCategory = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {}
  
  //get all products
  getProducts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/all`); 
  }

  
  //get laptop products 
  getLaptopCategory():Observable<any>{
    return this.http.get(`${this.apiUrl}/laptop`)
  }

  //get dasktop products
  getDesktopCategory():Observable<any>{
    return this.http.get(`${this.apiUrl}/desktop`)
  }

  //get monitor products
  getMonitorCategory():Observable<any>{
    return this.http.get(`${this.apiUrl}/monitor`)
  }

  //get tv products
  getTvCategory():Observable<any>{
    return this.http.get(`${this.apiUrl}/tv`)
  }

  //get gaming products
  getGamingCategory():Observable<any>{
    return this.http.get(`${this.apiUrl}/gaming`)
  }

  //get accessories products
  getAccessoriesCategory():Observable<any>{
    return this.http.get(`${this.apiUrl}/accessories`)
  }

  //get bluetooth-speaker products
  getSpeakerCategory():Observable<any>{
    return this.http.get(`${this.apiUrl}/bluetooth-speaker`)
  }

  setSelectedCategory(category: string): void {
    this.selectedCategory.next(category);
  }

  getSelectedCategory(): Observable<string> {
    return this.selectedCategory.asObservable();
  }

  // get single product
  getSingleProduct(id: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
