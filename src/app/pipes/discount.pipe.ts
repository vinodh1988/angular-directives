import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(value: any, arg: any): any {
     if(arg>30)
        value-=value*.2;
    else if(arg>20)
        value-=value*.1;
     else if(arg>15)
        value-=value*.05;
    else
         ;
    return value;    
  }

}
