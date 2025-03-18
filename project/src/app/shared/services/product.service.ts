import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProducts():Observable<any>{
    return this.http.get("https://run.mocky.io/v3/0d6735c8-ef0c-49ee-b1ad-ce1ed3a86ff8");
  }

  getSingleProduct(id:any):Observable<any>{
    // return this.http.get(``);
    return this.http.get<any[]>('https://run.mocky.io/v3/0d6735c8-ef0c-49ee-b1ad-ce1ed3a86ff8').pipe(
      map((products : any) => products.find((product: any) => product.product_id == id))
    );
  }
}
