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
  @Input() loadingInProgress;
  @Output() videoPlaylist = new EventEmitter();
  sortName:boolean;
  sortDate:boolean;
  filter:boolean;
  sortBy : string;
  constructor(private homeComponent: HomeComponent) {
  }

  sortByName() {
    this.sortDate = false;
    this.filter = true;
    this.sortName = true;
    this.sortBy = 'snippet.title';
  }
  sortByDate() {
    this.sortName = false;
    this.sortDate = true;
    this.filter = true;
    this.sortBy = 'snippet.publishedAt';
  }

  searchMore() {
    this.homeComponent.searchMore();
  }

  ngOnInit() {
  }

}
