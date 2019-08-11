import { Component, OnInit } from '@angular/core';
// import { Products } from '../../share/mock-data';
import { Product } from '../../share/data-type';
import { ProductServiceService } from '../product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];


  constructor(private productService: ProductServiceService, private router: Router) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe( resp => {
      this.products = resp;
    });
  }

  openDetail(productId: number){
    this.router.navigate(['/product', productId]);
  }
}
