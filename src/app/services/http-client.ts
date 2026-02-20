import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpServiceDemo {
  
  private http = inject(HttpClient)

  API_URL = "https://dummyjson.com/product"

  getAllUsers() {
    return this.http.get<any>(this.API_URL)
  }
}
