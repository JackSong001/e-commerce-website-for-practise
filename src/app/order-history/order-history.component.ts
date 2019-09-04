import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import { Order, OrderList } from '../../share/data-type';
@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  dataSource: Order[];
  orderList: OrderList[];
  displayedColumns: string[] = ['img', 'name', 'price', 'color', 'size'];

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    if (localStorage.getItem('mm-user')) {
      const email = JSON.parse(localStorage.getItem('mm-user'));
      this.ordersService.getOrderList(email).subscribe((resp: OrderList[]) => {
        if (resp) {
          this.orderList = resp;
        }
      });
    }
  }

}
