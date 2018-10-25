import { Component } from '@angular/core';
import { YoutubeApiService } from './service/youtube-api.service';
import { HeaderComponent } from './header/header.component';
import { BodyInternalComponents } from './body/body.internal';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Youtube';
}
export const AppInternalComponents = [HeaderComponent, BodyInternalComponents]