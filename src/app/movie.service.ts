import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Movie } from './movie';
import { MOVIES } from './fake-movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies(query?: String): Observable<Movie[]> {
    const moviesUrl = 'https://www.reviewsense.net/moviesearches?title='
    let header_node = {
      headers: new HttpHeaders(
          { 'rejectUnauthorized': 'false' })
      };
    console.log(moviesUrl + query)
    return this.http.get<Movie[]>(moviesUrl + query, header_node)
  }

  getHomepage(): Observable<Movie[]>{
    const homepageUrl = 'https://www.reviewsense.net/homepage'
    let header_node = {
      headers: new HttpHeaders(
          { 'rejectUnauthorized': 'false' })
      };
    console.log(homepageUrl)
    return this.http.get<Movie[]>(homepageUrl, header_node)
  }

  getMovie(movieid: number): Observable<Movie>{
    const moviesUrl = 'https://www.reviewsense.net/movies?ref_num='
    let header_node = {
      headers: new HttpHeaders(
          { 'rejectUnauthorized': 'false' })
      };
    console.log(moviesUrl + movieid.toString())
    return this.http.get<Movie>(moviesUrl + movieid.toString(), header_node)
  }
}
