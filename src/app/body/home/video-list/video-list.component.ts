import { Component,OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HomeComponent } from'../home.component';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  host:{'style':'width:100%'},
})
export class VideoListComponent implements OnInit {

  @Input() videoList;
  @Input() loadingVideos;
  sortName:boolean;
  sortDate:boolean;
  filter:boolean;
  sortBy : string;
  constructor(private homeComponent: HomeComponent) {
  }

  /**
   * sortByName: 
   * 1. It reset the value of sortDate to false and sortName to true, 
   *    so that the view changes in sorted order by Name.
   * 2. It assigns sortBy value to 'snippet.title', this value is sent to sortVideo method by pipe.
   */
  sortByName() {
    this.sortDate = false;
    this.filter = true;
    this.sortName = true;
    this.sortBy = 'snippet.title';
  }

    /**
   * sortByDate: 
   * 1. It reset the value of sortDate to true and sortName to false, 
   *    so that the view changes in sorted order by Date.
   * 2. It assigns sortBy value to 'snippet.publishedAt', this value is sent to sortVideo method by pipe.
   */
  sortByDate() {
    this.sortName = false;
    this.sortDate = true;
    this.filter = true;
    this.sortBy = 'snippet.publishedAt';
  }

  /**
   * loadMore:
   * 1. This method calls searchMore method of homeCompoent and used to load more 25 results.
   * 2. This method calls youtube api for the next page result and store that result in videoList.
   */
  loadMore() {
    this.homeComponent.loadMore();
  }

  ngOnInit() {
  }

}
