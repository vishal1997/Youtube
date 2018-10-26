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

  /**
   * 
   * @param youtubeApiService 
   * @param formBuilder 
   * 
   * By default empty query is sent to the youtube api, and the result is updated by 25 videos.
   */
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
  @Input() loadingVideos;

  private searchVideos: string;

  public searchForm = this.formBuilder.group({
    query: ['', Validators.required]
  });

  ngOnInit() {
  }
/**
 * 
 * @param event 
 * 
 * search:  1. This method accept argument '$event' from the form.
 *          2. If the length of the query is zero or the query is same as the previous 
 *              query it returns without calling the youtubeApiService.
 *          3. If the above condition is false then it calls for searchVideos method
 *              in youtubeApiService with parameter 'searchVideos'.
 *          4. If data is not found then it give a alert message "No data found".
 */
  search(event): void {

    if (this.loadingVideos ||
      (this.searchForm.value.query.trim().length === 0) ||
      (this.searchVideos && this.searchVideos === this.searchForm.value.query)) {
      return;
    }

    this.videosUpdated.emit([]);
    this.searchVideos = this.searchForm.value.query;

    this.youtubeApiService.searchVideos(this.searchVideos)
      .then(data => {
        if (data.length < 1) {
          window.alert("No Data found");
        }
        this.videosUpdated.emit(data);
      })
  }
}