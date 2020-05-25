import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'italic'
})
export class ItalicPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.age >= 18 ? value.name : ``;
  }

}
