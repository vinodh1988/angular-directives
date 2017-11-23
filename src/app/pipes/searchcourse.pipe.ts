import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchcourse'
})
export class SearchcoursePipe implements PipeTransform {

  transform(value: any, args?: any): any {
  
    if(args===undefined || args.length===0)
      return value;
      args=args.toUpperCase();
    var p=new RegExp(args);
    return value.filter(x=>p.test(x.course.toUpperCase()));
  
  }

}
