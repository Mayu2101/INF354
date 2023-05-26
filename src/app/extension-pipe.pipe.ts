import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extensionPipe'
})
export class ExtensionPipePipe implements PipeTransform {

  transform(value: string): string {
    let picName = "";
    picName = value.substring(0, value.lastIndexOf("."))
    return picName;
  }

}
