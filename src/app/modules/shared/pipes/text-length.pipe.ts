import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textLength'
})
export class TextLengthPipe implements PipeTransform {

  transform(value: string, limit: number): string {
    if (value.length <= limit) {
      return value;
    } else {
      return value.substr(0, limit);
    }
  }

}
