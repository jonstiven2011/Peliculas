import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL= environment.imgPath;
@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(img: string, size: string ='w500'): string {
    if(!img){
      return './assets/original.png';
    }
    const imgUrl = `${ URL }/${ size }${ img }`;
    return imgUrl;
  }

}
