import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProducts():Observable<any>{
    return this.http.get("https://run.mocky.io/v3/20454008-1f2f-42d8-941b-61dc145edf8a");
  }

  getSingleProduct(id:any):Observable<any>{
    // return this.http.get(``);
    return this.http.get<any[]>('https://run.mocky.io/v3/20454008-1f2f-42d8-941b-61dc145edf8a').pipe(
      map((products : any) => products.find((product: any) => product.product_id == id))
    );
  }
}
