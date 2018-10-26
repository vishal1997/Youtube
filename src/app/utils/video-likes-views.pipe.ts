import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'videoLikesViews'
})

/**
 * This pipe class is used to convert the number of views data in integer format
 */
export class VideoLikesViewsPipe implements PipeTransform {
  transform(value: any, args?: any[]): any {
    return parseInt(value, 10).toLocaleString('en');
  }
}
