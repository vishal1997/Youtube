import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './MaterialModule';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { HomeComponent } from './body/home/home.component';
import { LeftPanelComponent } from './body/left-panel/left-panel.component';
import { RightPanelComponent } from './body/right-panel/right-panel.component';
import { HeaderComponent } from './header/header.component';
import { BodyInternalComponents } from './body/body.internal';
import { AppRouterModule } from './routing/app-router.module';
import { SearchComponent } from './body/home/search/search.component';
import { VideoListComponent } from './body/home/video-list/video-list.component'
import { VideoNamePipe } from './utils/video-name.pipe';
import { VideoLikesViewsPipe } from './utils/video-likes-views.pipe';
import { VideoDurationPipe } from './utils/video-duration.pipe';
import { VideosSortPipe } from './utils/sort'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeftPanelComponent,
    RightPanelComponent,
    HeaderComponent,
    BodyInternalComponents,
    SearchComponent,
    VideoListComponent,
    VideoDurationPipe,
    VideoLikesViewsPipe,
    VideoDurationPipe,
    VideoNamePipe,
    VideosSortPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule, 
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    AppRouterModule,
    HttpModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
