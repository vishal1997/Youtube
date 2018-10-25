import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { YoutubeApiService } from '../../../service/youtube-api.service';
import { VideosSortPipe } from '../../../utils/sort';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[YoutubeApiService]
})
export class SearchComponent implements OnInit {

  constructor(
    private youtubeApiService : YoutubeApiService,
    private formBuilder : FormBuilder,
  ) { 
    this.youtubeApiService.searchVideos('')
      .then(data => {
        this.videosUpdated.emit(data);
    })

  }

  @Output() videosUpdated = new EventEmitter();
  @Input() loadingInProgress;
  videoList:any;

  private last_search: string;

  public searchForm = this.formBuilder.group({
    query: ['', Validators.required]
  });

  ngOnInit() {
  }

  search(event): void {
    if (this.loadingInProgress ||
      (this.searchForm.value.query.trim().length === 0) ||
      (this.last_search && this.last_search === this.searchForm.value.query)) {
      return;
    }

    this.videosUpdated.emit([]);
    this.last_search = this.searchForm.value.query;

    this.youtubeApiService.searchVideos(this.last_search)
      .then(data => {
        if (data.length < 1) {
          console.log("No Data found");
        }
        this.videosUpdated.emit(data);
        console.log(data);
        this.videoList = data;
      })
  }
}