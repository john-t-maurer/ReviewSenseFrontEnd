import { Component, OnInit, Input } from '@angular/core';

import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { Options } from '../options';

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
