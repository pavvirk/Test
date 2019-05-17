import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { ProductService } from '../../api/products/services/product.service';
//import { SortProductsPipe } from './sort-products.pipe';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ ProductService ]
})
export class ProductsComponent implements OnInit {
  items: any = [];
  errMsg = '';

  constructor(public productService: ProductService,
              private router: Router) { }


  ngOnInit() {
    this.productService.getItems()
      .subscribe(items => {
          this.items = items;
    }, error => this.errMsg = <any>error);

    console.log(this.items);
  }

}
