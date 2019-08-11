import { Component, OnInit } from '@angular/core';
import {Product, OrderInfo } from '../../share/data-type';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { CartDialogComponent } from '../cart-dialog/cart-dialog.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  productId = undefined;
  color = '';
  size = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductServiceService,
    public dialog: MatDialog) {
      this.route.params.subscribe( params => {
        this.productId = params.id;
      });
     }

  ngOnInit() {
    this.productService.getProduct(this.productId).subscribe( resp => {
      this.product = resp;
      this.color = resp.color[0];
      this.size = resp.size[0];
    });
  }

  addToCart() {
    const order: OrderInfo = {
      id: this.product.id,
      name: this.product.name,
      color: this.color,
      size: this.size,
      price: this.product.price,
      img: this.product.imgList[0]
    };
    this.setLocalStorage(order);
    this.openDialog();
  }

  private setLocalStorage(order: OrderInfo) {
    const cart = JSON.parse(localStorage.getItem('mm-cart'));
    if ( cart && cart.length > 0) {
      localStorage.clear();
      cart.push(order);
      localStorage.setItem('mm-cart', JSON.stringify(cart));
    } else {
      localStorage.setItem('mm-cart', JSON.stringify([order]));
    }
  }

  private openDialog(): void {
    const dialogRef = this.dialog.open(CartDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
