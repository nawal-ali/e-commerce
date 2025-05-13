import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getUserData(id:any):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/register/${id}`)
  }

  getUserPrevOrders(id:any):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/prevOrder/${id}`)
  }
}
