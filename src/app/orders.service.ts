import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { OrderList } from '../share/data-type';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  getOrderList(email: string): Observable<OrderList[]> {
    return this.http.get<OrderList[]>(`/api/orders/${email}`);
  }

  addOrder(order: OrderList) {
    return this.http.post('/api/checkout', order);
  }
}
