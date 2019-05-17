import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortProducts'
})
export class SortProductsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.sort((a, b) => {
      let string1: string = a.productName;
      let string2: string = b.productName;
      if (string1 > string2) {
        return 1;
      } else if (string1 === string2) {
        return 0;
      } else {
        return -1;
      }
    });

  }

}
