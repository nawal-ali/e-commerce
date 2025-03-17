import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProducts():Observable<any>{
    return this.http.get("https://run.mocky.io/v3/683d6cd1-d1c1-45c0-96bc-2a211123452a");
  }
}
