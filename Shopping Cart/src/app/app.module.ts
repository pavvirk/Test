import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductService } from '../api/products/services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { SortProductsPipe } from './products/sort-products.pipe';
import { CartComponent } from './cart/cart.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'cart/:productId', component: CartComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SortProductsPipe,
    CartComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(appRoutes), ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
