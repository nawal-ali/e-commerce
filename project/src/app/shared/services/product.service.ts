import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map,Observable, BehaviorSubject } from 'rxjs';

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

  getSingleProduct(id:any):Observable<any>{
    // return this.http.get(``);
    return this.http.get<any[]>('https://run.mocky.io/v3/20454008-1f2f-42d8-941b-61dc145edf8a').pipe(
      map((products : any) => products.find((product: any) => product.product_id == id))
    );
  }
}
