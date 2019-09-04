import { Component, OnInit } from '@angular/core';
import { CartDialogComponent } from './cart-dialog/cart-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Product } from '../share/data-type';
import { ProductServiceService } from './product-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mmfront';
  userName = '';
  showDropdown = '';
  options: Product[] = [];
  myControl = new FormControl();
  filteredOptions: Observable<Product[]>;

  constructor(
    public dialog: MatDialog, public router: Router, private productService: ProductServiceService) {
    this.productService.getAllProducts().subscribe(resp => {
      this.options = resp;
      this.filteredOptions = this.myControl.valueChanges
        .pipe(
          startWith(''),
          map(value => typeof value === 'string' ? value : value.name),
          map(name => name ? this._filter(name) : this.options.slice())
        );
    }, error => {
      console.log(error);
    });
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

  displayFn(product?: Product): string | undefined {
    return product ? product.name : undefined;
  }

  private _filter(name: string): Product[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
  
  accountLogin() {
    if (localStorage.getItem('user')) {
      this.router.navigate(['/account']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  searchResult() {
    if (!this.myControl.value.name) {
      return;
    }
    this.router.navigate(['/product', this.myControl.value.name]);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(CartDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  signUp() {
    if (localStorage.getItem('mm-user')) {
      this.router.navigate(['userinfo']);
    } else {
      this.router.navigate(['register']);
    }
  }

  logined() {
    if (localStorage.getItem('mm-user')) {
      return false;
    } else {
      return true;
    }
  }

}
