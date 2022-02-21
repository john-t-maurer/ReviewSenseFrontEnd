import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Movie } from './movie';
import { MOVIES } from './fake-movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovies(): Observable<Movie[]> {
    const movies = of(MOVIES);
    return movies;
  }

  getMovie(movieid: number): Observable<Movie> {
    // For now, assume that a movie with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const movie = MOVIES.find(mov => mov.ref_num === movieid)!;
    return of(movie);
  }
}
