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
  public videoPlaylist = [];
  public loadingInProgress = false;
  public playlistToggle = false;
  public playlistNames = false;
  public repeat = false;
  public shuffle = false;
  public playlistElement: any;
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

  searchMore(): void {
    if (this.loadingInProgress || this.pageLoadingFinished || this.videoList.length < 1) {
      return;
    }

    this.loadingInProgress = true;
    this.youtubeService.searchNext()
      .then(data => {
        this.loadingInProgress = false;
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
        this.loadingInProgress = false;
      })
  }
}