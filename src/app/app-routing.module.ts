import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { ReviewPageComponent } from './review-page/review-page.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*Paste into Routes array later
  {path: '', component: HomePageComponent},
  {path: ':movieid', component: MoviePageComponent},
  {path: ':movieid/:reviewid', component: ReviewPageComponent}
*/
