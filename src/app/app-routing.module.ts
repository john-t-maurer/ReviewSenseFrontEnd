import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { ReviewPageComponent } from './review-page/review-page.component';
import { SearchResultsPageComponent } from './search-results-page/search-results-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'movie/:movieid/page/:page', component: MoviePageComponent},
  {path: 'movie/:movieid/page/:page/sentiment/:sentiment', component: MoviePageComponent},
  {path: 'movie/:movieid/page/:page/frequency/:word', component: MoviePageComponent},
  {path: 'review/:reviewid', component: ReviewPageComponent},
  {path: 'search/:query/page/:page', component: SearchResultsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
