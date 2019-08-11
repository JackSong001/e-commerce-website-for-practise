import { Injectable } from '@angular/core';
import { Product} from '../share/data-type';
import { Products } from '../share/mock-data'
import { HttpClient } from 'selenium-webdriver/http';
import { Observable, of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  products: Product[] = Products.slice();
  

  constructor() { }

  getAllProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProduct(id: number): Observable<Product> {
    const product = this.products.filter( item => item.id == id)[0];
    return of(product);
  }

  // constructor(private http: HttpClient) {
  // }

  // getAllProducts(): Observable<Product[]> {
  //   return this.http.get<Product[]>('/api/products');
  // }

  // getProduct(name: string): Observable<Product> {
  //   return this.http.get<Product>(`/api/product/${name}`);
  // }
}
