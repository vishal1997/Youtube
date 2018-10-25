import { Pipe, PipeTransform, Injector, Injectable } from "@angular/core";

@Pipe({
  name: "sort"
})

@Injectable()

export class VideosSortPipe  implements PipeTransform {

  transform(videos: any[], field: string): any[] {
    let fields = field.split('.');
    let len = fields.length;
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
  }
}