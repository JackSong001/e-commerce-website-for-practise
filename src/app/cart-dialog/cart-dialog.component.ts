import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {OrderInfo } from '../../share/data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.css']
})
export class CartDialogComponent implements OnInit {

  cart: OrderInfo[] = JSON.parse(localStorage.getItem('mm-cart'));
  dataSource: OrderInfo[];
  displayedColumns: string[] = ['img', 'name', 'price', 'color', 'size', 'delete'];
  totlePrice = 0.0;

  constructor( public router: Router, public dialogRef: MatDialogRef<CartDialogComponent>) { }

  ngOnInit() {
    if (localStorage.getItem('mm-cart')) {
      this.dataSource = this.cart.slice();
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  removeOne(id: number) {
    const temp = this.dataSource.slice();
    temp.splice(id, 1);
    this.dataSource = temp;
    // this.dataSource = this.cart.filter(item => item.id !== id);
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
      this.router.navigate(['/checkout']);
    }
    this.dialogRef.close();
    // go to checkout location
  }

  detail(id: number ) {
    this.router.navigate(['/product', id]);
    this.dialogRef.close();
  }
}
