import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Order, OrderList } from '../../share/data-type';
import { Router } from '@angular/router';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.css']
})
export class CartDialogComponent implements OnInit {
  loading = false;
  cart: Order[] = JSON.parse(localStorage.getItem('mm-cart'));
  dataSource: Order[];
  displayedColumns: string[] = ['img', 'name', 'price', 'color', 'size', 'delete'];
  totlePrice = 0.0;

  constructor(private ordersService: OrdersService, private router: Router, public dialogRef: MatDialogRef<CartDialogComponent>) { }

  ngOnInit() {
    if (localStorage.getItem('mm-cart')) {
      this.dataSource = this.cart.slice();
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  removeOne(id: number) { // id is the index of list
    const temp = this.dataSource.slice();
    temp.splice(id, 1);
    this.dataSource = temp;
    localStorage.setItem('mm-cart',  JSON.stringify(this.dataSource));
  }

  getSubTotle(): number {
    let subTotle = 0.00;
    this.dataSource.forEach(item => subTotle += item.price );
    return subTotle;
  }

  getTotle(): number {
    this.totlePrice = this.getSubTotle() + 10.50;
    return this.totlePrice;
  }

  checkOut() {
    const userInfo = JSON.parse(localStorage.getItem('mm-user'));
    if (!userInfo) {
      this.router.navigate(['/register']);

    } else {
      setTimeout(() => {
        this.order(userInfo);
    }, 2000);
    }
    this.dialogRef.close();
    // go to checkout location
  }

  detail(name: string ) {
    this.router.navigate(['/product', name]);
    this.dialogRef.close();
  }

  private order(userEmail: string) {
    const date = new Date();
    const orderList: OrderList = {
      email: userEmail,
      date: date.getTime(),
      price: this.totlePrice,
      orders: this.dataSource,
    };
    this.ordersService.addOrder(orderList).subscribe(resp => {
      if (resp) {
        localStorage.removeItem('mm-cart');
        this.loading = false;
        this.router.navigate(['/userinfo']);
      }
    }, error => {
      this.loading = false;
      console.log(error);
    });
  }
}