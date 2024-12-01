import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipegreso',
  standalone: true
})
export class PipegresoPipe implements PipeTransform {

  transform(value: unknown): unknown {
    
    return value + (`nuevo`);
  }

}
