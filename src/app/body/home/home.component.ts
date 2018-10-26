import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { YoutubeApiService } from '../../service/youtube-api.service';
import { SearchComponent } from '../home/search/search.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host:{'style':'width:100%'},
  providers:[YoutubeApiService, SearchComponent]
})
export class HomeComponent implements OnInit {

  public videoList = [];
  public loadingVideos = false;
  private pageLoadingFinished = false;

  constructor(
    private youtubeService: YoutubeApiService,
    private search : SearchComponent,
  ) {
  }

  ngAfterViewInit() {
    
  }

  ngOnInit() {
  }

  handleSearchVideo(videos: Array<any>): void {
    this.videoList = videos;
  }

  /**
   * searchMore:  1. This method is called when 'Load More button is clicked'.
   *              2. If current videoList is empty or if the loading is still in process
   *                  then it return without calling the youtubeApiService,
   *              3.  If above condtion is false then it calls for 'searchNext()' method in
   *                  youtubeApiService to load more 25 results.
   *              4.  Load timeout is et to 10000 sec.
   *              5.  If loading is successfull then the result is added to the videoList.
   */
  loadMore(): void {
    if (this.loadingVideos || this.pageLoadingFinished || this.videoList.length < 1) {
      return;
    }

    this.loadingVideos = true;
    this.youtubeService.loadNext()
      .then(data => {
        this.loadingVideos = false;
        if (data.length < 1 || data.status === 400) {
          setTimeout(() => {
            this.pageLoadingFinished = true;
            setTimeout(() => {
              this.pageLoadingFinished = false;
            }, 10000);
          })
          return;
        }
        data.forEach((val) => {
          this.videoList.push(val);
        });
      }).catch(error => {
        this.loadingVideos = false;
      })
  }
}