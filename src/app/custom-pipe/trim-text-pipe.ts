import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimText',
})
export class TrimTextPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string { // this is where we write the logic of the custom pipe
    console.log(args);
    if(args.length) return value.substring(0, args[0])+"..."
    return value.substring(0, 10)+"..."    
  }

}
