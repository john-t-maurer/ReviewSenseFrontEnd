import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {

  display?: Number;

  @Input() movie?: Movie;

  constructor(
    private movieService:MovieService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getMovie();
    this.generateDisplay();
  }

  getMovie(): void {
    const id = Number(this.route.snapshot.paramMap.get('movieid'));
    this.movieService.getMovie(id)
      .subscribe(movie => this.movie = movie);
  }

  generateDisplay(): void{
    if (this.location.path().includes("sentiment")){
      this.display = 1;

    }else if (this.location.path().includes("frequency")){
      this.display = 2;

    }else{
      this.display = 0;
    }
  }

  goBack(): void {
    this.location.back();
  }

  //For the on click methods, use this.location.go to switch URLs for routing

}
