import { Component, OnInit, Input } from '@angular/core';

import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { Options } from '../options';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Input() options?: Options;

  movies: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

    customOptions: OwlOptions = {
      loop: true,
      autoWidth: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      dots: false,
      navSpeed: 700,
      navText: ['< <', '> >'],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 4
        }
      },
      nav: true
    }

  getMovies(): void{
    switch(this.options?.location){
      case "Home":
        this.movieService.getHomepage().subscribe(movies => this.movies = movies);
        break;
      case "Lowest":
        this.movieService.getLowestSentiment().subscribe(movies => this.movies = movies);
        break;
      case "Highest":
        this.movieService.getHighestSentiment().subscribe(movies => this.movies = movies);
        break;
      case "Search":
        this.movieService.getMovies(this.options?.query).subscribe(movies => this.movies = movies);
    }

  }
}
