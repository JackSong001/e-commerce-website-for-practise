import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { FormsModule } from '@angular/forms';
import { UserInfoComponent } from './user-info/user-info.component';
import { ProductListComponent } from './product-list/product-list.component';

import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CartDialogComponent } from './cart-dialog/cart-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterPageComponent,
    UserInfoComponent,
    ProductListComponent,
    ProductDetailComponent,
    CartDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule

  ],
  entryComponents: [CartDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
