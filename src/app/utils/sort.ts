import { Pipe, PipeTransform, Injector, Injectable } from "@angular/core";

@Pipe({
  name: "sort"
})

@Injectable()

export class VideosSortPipe  implements PipeTransform {

  /**
   * 
   * @param videos : list of videos.
   * @param field : property of videos bywhich the list is to be sorted.
   * This method use used for sortinf the videos by the given property.
   * sort method of an array is used to sort the videos.
   * The property is in doted format, we extract the property and then sort in decending order.
   */
  transform(videos: any[], field: string): any[] {
    let fields = field.split('.');
    let len = fields.length;
    let prop = fields[len-1];
    if(prop == "publishedAt") { 
      videos.sort((a: any, b: any) => {
        let i = 0;
        while( i < len ) {
          a = a[fields[i]];
          b = b[fields[i]];
          i++;
        }
        if (a > b) {
          return -1;
        } else if (a < b) {
          return 1;
        } else {
          return 0;
        }
      });
      return videos;
    } else {
        videos.sort((a: any, b: any) => {
          let i = 0;
          while( i < len ) {
            a = a[fields[i]];
            b = b[fields[i]];
            i++;
          }
          if (a < b) {
            return -1;
          } else if (a > b) {
            return 1;
          } else {
            return 0;
          }
        });
        return videos;
    }
  }
}