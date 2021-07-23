import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cb',
})
export class CbPipe implements PipeTransform {
  transform(value: string, n: number = 4) {
    return `${value.slice(0, n)} ${new Array(16 - 2 * n).join(
      'x'
    )} ${value.slice(-n)}`;
  }
}
