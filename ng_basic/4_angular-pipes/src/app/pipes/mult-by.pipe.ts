// @ts-ignore
import {Pipe, PipeTransform} from '@angular/core';

// @ts-ignore
@Pipe({
  name: 'mult'
})
export class MultByPipe implements PipeTransform {
  transform(num: number, pow: number = 2): number {
    return num * pow;
  }
}
