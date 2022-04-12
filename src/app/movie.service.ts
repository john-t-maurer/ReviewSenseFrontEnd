import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Movie } from './movie';

/**
 * A service that fetches movie information from the database.
 */
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  /**
   * Constructs the movie service.
   * @constructor
   * 
   * @param http - The HttpClient used to facilitate communication to the back-end server. 
   */
  constructor(private http: HttpClient) { }

  /**
   * Gets a list of movies based on an input query.
   * 
   * @param page - The page number to load.
   * @param query - The input to filter the movies by.
   * @returns a list of movies filtered by the given query.
   */
  getMovies(page?: string, query?: String): Observable<Movie[]> {
    console.log(query)
    query = query?.replace('\'','\"')
    console.log(page)
    
    const moviesUrl = 'https://www.reviewsense.net/moviesearches?title=' + query + '&page='+ page
    let header_node = {
      headers: new HttpHeaders(
          { 'rejectUnauthorized': 'false' })
      };
    console.log(moviesUrl + query)
    return this.http.get<Movie[]>(moviesUrl, header_node)
  }

  /**
   * Gets the list of movies to populate "Things to Watch" on the homepage.
   * 
   * @returns a list of movies for the homepage.
   */
  getHomepage(): Observable<Movie[]>{
    const homepageUrl = 'https://www.reviewsense.net/homepage'
    let header_node = {
      headers: new HttpHeaders(
          { 'rejectUnauthorized': 'false' })
      };
    console.log(homepageUrl)
    return this.http.get<Movie[]>(homepageUrl, header_node)
  }

  /**
   * Gets a movie based on its ID.
   * 
   * @param movieid - The reference number of the movie.
   * @returns the desired movie.
   */
  getMovie(movieid: number): Observable<Movie>{
    const moviesUrl = 'https://www.reviewsense.net/movies?ref_num='
    let header_node = {
      headers: new HttpHeaders(
          { 'rejectUnauthorized': 'false' })
      };
    console.log(moviesUrl + movieid.toString())
    return this.http.get<Movie>(moviesUrl + movieid.toString(), header_node)
  }

  /**
   * Gets the list of movies to populate "Highest Ratings".
   * 
   * @returns a list of the highest sentiment movies.
   */
  getHighestSentiment(): Observable<Movie[]>{
    const highestUrl = 'https://www.reviewsense.net/movies/highest'
    let header_node = {
      headers: new HttpHeaders(
          { 'rejectUnauthorized': 'false' })
      };
    return this.http.get<Movie[]>(highestUrl, header_node)
  }

  /**
   * Gets the list of movies to populate "Lowest Ratings".
   * 
   * @returns a list of the lowest sentiment movies.
   */
  getLowestSentiment(): Observable<Movie[]>{
    const lowestUrl = 'https://www.reviewsense.net/movies/lowest'
    let header_node = {
      headers: new HttpHeaders(
          { 'rejectUnauthorized': 'false' })
      };
    return this.http.get<Movie[]>(lowestUrl, header_node)
  }

}
