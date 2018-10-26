import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { YOUTUBE_API_KEY } from './constants';

@Injectable()
export class YoutubeApiService {
  baseUrl = 'https://www.googleapis.com/youtube/v3/';
  noOfVideos = 25;

  public nextToken: string;
  public lastQuery: string;

  constructor(
    private _http: Http
  ) { }

  /**
   *    
   * @param query 
   * searchVideos: 1. This method makes request to the youtube api for the given query.
   *               2. It append the query, number of videos required and youtube api key
   *                   to the url and makes a 'get' request. 
   *               3. The respose in converted to json format and next page token is stored,
   *                  so that the token can be used for next page result.
   *               4. From the json data, video ids is extracted and added to a list which is
   *                  used to load the videos, these ids are passed as argument to getVideos(ids) 
 *                    methods.
   */
  searchVideos(query: string): Promise<any> {
    const url = `${this.baseUrl}search?q=${query}&maxResults=${this.noOfVideos}&type=video&part=snippet,id&key=${YOUTUBE_API_KEY}&videoEmbeddable=true`; 

    return this._http.get(url)
      .pipe(map(response => {
        let videosRespose = response.json();
        let videosData = videosRespose['items'];
        this.lastQuery = query;
        this.nextToken = videosRespose['nextPageToken'] ? videosRespose['nextPageToken'] : undefined;

        let videoIds = [];

        videosData.forEach((item) => {
          videoIds.push(item.id.videoId);
        });

        return this.getVideosByVideoIds(videoIds);
      }))
      .toPromise()
      .catch()
  }

  /**
   *  
   * @param ids 
   * getVideosByVideoIds: 1. This method accept list of videos id which is used to load video details.
   *            2. All the videos id are joined with ',' and added to the url with youtube api key
   *                and makes a 'get' request.
   *            3.  The result is then converted to json and returned.
   */
  getVideosByVideoIds(videoIds): Promise<any> {
    const url = `${this.baseUrl}videos?id=${videoIds.join(',')}&maxResults=${this.noOfVideos}&type=video&part=snippet,contentDetails,statistics&key=${YOUTUBE_API_KEY}`; 

    return this._http.get(url)
      .pipe(map(data => {
        return data.json()['items'];
      }))
      .toPromise()
      .catch()
  }

/**
 * loadNext:  1. This method adds query, next token, number of videos 
 *                  and youtube api key to the url and makes a 'get' request
 *                  to youtube api.
 *              2. It append the query, number of videos required and youtube api key
 *                   to the url and makes a 'get' request. 
 *              3. The respose in converted to json format and next page token is stored,
 *                  so that the token can be used for next page result.
 *              4. From the json data, video ids is extracted and added to a list which is
 *                  used to load the videos, these ids are passed as argument to getVideos(ids) 
 *                  methods.
 */

  loadNext(): Promise<any> {
    const url = `${this.baseUrl}search?q=${this.lastQuery}&pageToken=${this.nextToken}&maxResults=${this.noOfVideos}&type=video&part=snippet,id&key=${YOUTUBE_API_KEY}&videoEmbeddable=true`; // tslint:disable-line

    return this._http.get(url)
      .map(response => {
        let videosRespose = response.json();
        let videosData = videosRespose['items'];
        this.nextToken = videosRespose['nextPageToken'] ? videosRespose['nextPageToken'] : undefined;
        let videoIds = [];

        videosData.forEach((item) => {
          videoIds.push(item.id.videoId);
        });

        return this.getVideosByVideoIds(videoIds);
      })
      .toPromise()
      .catch()
  }
}