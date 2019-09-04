import { Injectable } from '@angular/core';
import { Product} from '../share/data-type';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  constructor(private http: HttpClient) {
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products');
  }

  getProduct(name: string): Observable<Product> {
    return this.http.get<Product>(`/api/product/${name}`);
  }
}
