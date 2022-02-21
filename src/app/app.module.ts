import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReviewComponent } from './review/review.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { MovieComponent } from './movie/movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ReviewPageComponent } from './review-page/review-page.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SentimentDisplayComponent } from './sentiment-display/sentiment-display.component';
import { WordFrequencyDisplayComponent } from './word-frequency-display/word-frequency-display.component';
import { CombinedDisplayComponent } from './combined-display/combined-display.component';
import { WordCloudComponent } from './word-cloud/word-cloud.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { AngularD3CloudModule } from 'angular-d3-cloud';

@NgModule({
  declarations: [
    AppComponent,
    ReviewComponent,
    ReviewListComponent,
    MovieComponent,
    MovieListComponent,
    ReviewPageComponent,
    MoviePageComponent,
    HomePageComponent,
    SentimentDisplayComponent,
    WordFrequencyDisplayComponent,
    CombinedDisplayComponent,
    WordCloudComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule.forRoot({echarts}),
    AngularD3CloudModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
