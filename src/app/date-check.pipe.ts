import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCheck'
})
export class DateCheckPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
