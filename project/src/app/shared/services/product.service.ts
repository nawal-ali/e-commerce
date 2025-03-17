import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProducts():Observable<any>{
    return this.http.get("https://run.mocky.io/v3/ac14fc23-a5ba-42b5-a806-3509e5fc5634");
  }
}
