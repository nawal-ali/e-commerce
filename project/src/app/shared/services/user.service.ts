import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLoged = false;
  logeduserId:any;

  private apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  // to get one user data
  getUserData(id:any):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/user/${id}`)
  }

  //to sign-up
  signUp(body:any):Observable<any>{
    return this.http.post(`${this.apiUrl}/register/sign-up`,body)
  }

  //to login
  login(body:any):Observable<any>{
    return this.http.post(`${this.apiUrl}/login`,body)
  }

  //to show previuos orders for a user
  getUserPrevOrders(id:any):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/prevOrder/${id}`)
  }

  createOrder(order: any) {
  return this.http.post(`${this.apiUrl}/prevOrder`, order); // Adjust base URL as needed
}
}
