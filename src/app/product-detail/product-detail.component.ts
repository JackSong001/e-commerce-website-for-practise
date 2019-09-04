import { Component, OnInit } from '@angular/core';
import { Product, Order } from '../../share/data-type';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CartDialogComponent } from '../cart-dialog/cart-dialog.component';
import { faFacebookF, faPinterest, faTwitter, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  faFacebookF = faFacebookF;
  faPinterest = faPinterest;
  faTwitter = faTwitter;
  faGooglePlusG = faGooglePlusG;
  product: Product;
  relatedProducts: Product[];
  productName = '';
  color = '';
  size = '';
  bgImg = {};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductServiceService,
    public dialog: MatDialog) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productName = params.name;
      this.productService.getProduct(this.productName).subscribe(resp => {
        this.product = resp;
        this.color = (resp.color.filter(color => color.link === this.productName)[0]).name;
        this.size = resp.size[0];
        this.changeImg(resp.imgList[0]);
        this.productService.getAllProducts().subscribe(resp => {
          const list = resp.filter(item => item.brandName === this.product.brandName);
          this.relatedProducts = list.length > 4 ? list.slice(0, 4) : list.slice(0, list.length);
        });
      });
    });
  }

  addToCart() {
    const order: Order = {
      name: this.product.brandName,
      color: this.color,
      size: this.size,
      price: this.product.price,
      img: this.product.imgList[0]
    };
    this.setLocalStorage(order);
    this.openDialog();
  }

  private setLocalStorage(order: Order) {
    const cart = JSON.parse(localStorage.getItem('mm-cart'));
    if (cart && cart.length > 0) {
      localStorage.removeItem('mm-cart');
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

  changeImg(name: string) {
    this.bgImg = {
      'background-image': `url(../../assets/${name})`
    };
  }
  openDetail(name: string) {

    this.router.navigate(['/product', name]);
    this.ngOnInit();
  }

  getBgImg(imgName: string) {
    return {
      'background-image': `url(../../assets/${imgName})`
    };
  }

  changeItem(name: string) {
    this.router.navigate(['/product', name]);
    this.ngOnInit();
  }
}
