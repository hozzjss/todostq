import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseError'
})
export class ParseErrorPipe implements PipeTransform {

  transform(value: any, args?: any): string {
    if (value) {
      if (value.required) {
        return 'Required';
      } else if (value.email) {
        return 'Invalid email address';
      } else if (value.name) {
        // TODO: implement register validation
      }
    }
    // if there are no errors pass back an empty array
  }

}
