import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms';

import { ProductService } from '../../api/products/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  item: any = {};
  form: any;
  productName: string;
  productImage: string;
  disabled_buttons_inc: boolean;
  add_to_cart: boolean;
  quantity: number;
  disabled_buttons_dec: boolean;

  constructor(private _route: ActivatedRoute,
              public productService: ProductService) {
  }

  ngOnInit() {
    this._route.params.subscribe((params) => {
      // @ts-ignore
      this.item = this.productService.getItem(params.productId).subscribe(item => {
        this.item = item;
        this.productName = item.productName;
        this.productImage = item.imageUrl;
        console.log('item', this.productName);

         this.form = new FormGroup({
           decreaseButton : new FormControl(),
           increaseButton : new FormControl(),
           quantity: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)]))
         });
      });
    });


  }
  


  onClickMeDec(event){
    this.quantity=event;
    
    alert(this.quantity);

    return this.quantity++;
    
   
    }
    
    // onClickMeIncr(){
    // this.quantity++;
    // this.disabled_buttons_dec = false
    // this.add_to_cart = false
    // if(this.quantity>= 10) 
    // {
    // this.disabled_buttons_inc = true
    // }
    // } 

}
