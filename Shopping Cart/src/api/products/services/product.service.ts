import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  private prodcutsSourceUrl = '../../../assets/products.json';

  constructor(private httpClient: HttpClient) {}

  // @ts-ignore
  getItems() {
    return this.httpClient.get(this.prodcutsSourceUrl)
      .do(data => data)
      .catch(this.handleError);
  }

  getItem(id: string) {
     return this.getItems().map(items => {
       // tslint:disable-next-line:no-unused-expression
        return Array.isArray(items) && items.find(item => item.productId === id);
     });
  }

  private handleError(error: HttpErrorResponse) {
    const errMsg = error.message;
    return errMsg;
  }

}
