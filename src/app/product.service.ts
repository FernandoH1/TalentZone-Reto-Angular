import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://localhost:8080/product";

  constructor(private httpClient: HttpClient) { }

  getListProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseUrl}`);
  }

  registerProduct(product:Product):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,product);
  }

  editProduct(id:number, product:Product): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`,product);
  }

  getProductById(id:number):Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseUrl}/${id}`);
  }

  deleteProduct(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`)
  }
}
