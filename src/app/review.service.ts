import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Review } from './review';

/**
 * A service that fetches review information from the database.
 */
@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  /**
   * Constructs the review service.
   * @constructor
   * 
   * @param http - The HttpClient used to facilitate communication to the back-end server. 
   */
  constructor(private http: HttpClient) { }

  /**
   * Gets a list of reviews.
   * 
   * @param movieid - The reference number of the movie.
   * @param page - The page number to load.
   * @returns a list of reviews as an Observable.
   */
  getReviews(movieid: number, page: number): Observable<Review[]> {
    const reviewsUrl = 'https://www.reviewsense.net/reviewlists?movie_id='+movieid + "&page="+page
    let header_node = {
      headers: new HttpHeaders(
          { 'rejectUnauthorized': 'false' })
      };
    console.log(reviewsUrl)
    return this.http.get<Review[]>(reviewsUrl, header_node)
  }

  /**
   * Gets a list of keywords based on the reviews from a movie.
   * 
   * @param movieid - The reference number of the movie.
   * @param sentiment - The desired sentiment to filter the keywords by.
   * @returns a list of keywords from all reviews of the given sentiment.
   */
  getKeywords(movieid: number, sentiment: string): Observable<[]> {
    const reviewsUrl = 'https://www.reviewsense.net/reviewlists/keywords?movie_id=' + movieid + "&sentiment=" + sentiment
    let header_node = {
      headers: new HttpHeaders(
          { 'rejectUnauthorized': 'false' })
      };
    console.log(reviewsUrl + movieid)
    return this.http.get<[]>(reviewsUrl, header_node)
  }

  /**
   * Provides a review list for the pie chart to iterate through.
   * 
   * @param movieid - The reference number of the movie.
   * @param page - The page number to load.
   * @param keyword - The keyword to filter the reviews by.
   * @returns a list of reviews used to generate the pie chart.
   */
  getPieChart(movieid: number,page: number, keyword: string): Observable<[]> {
    const reviewsUrl = 'https://www.reviewsense.net/reviewlists/sentiment/count?movie_id=' + movieid + "&page=" + page + '&keyword=' + keyword
    let header_node = {
      headers: new HttpHeaders(
          { 'rejectUnauthorized': 'false' })
      };
    console.log(reviewsUrl + movieid)
    return this.http.get<[]>(reviewsUrl, header_node)
  }

  /**
   * Gets a review based on its ID.
   * 
   * @param reviewid - The reference string of the review.
   * @returns the desired review.
   */
  getReview(reviewid: string): Observable<Review>{
    const reviewsUrl = 'https://www.reviewsense.net/reviews?review_id='
    let header_node = {
      headers: new HttpHeaders(
          { 'rejectUnauthorized': 'false' })
      };
    console.log(reviewsUrl + reviewid)
    return this.http.get<Review>(reviewsUrl + reviewid, header_node)
  }

  /**
   * Gets the list of reviews based on a selected sentiment.
   *  
   * @param movie_id - The reference number of the movie.
   * @param page - The page number to load.
   * @param sentiment - The sentiment to filter the reviews by.
   * @returns a list of reviews for a movie filtered by the given sentiment.
   */
  getSentimentReviews(movie_id: number, page: number, sentiment:string): Observable<Review[]>{

    const reviewsUrl = 'https://www.reviewsense.net/reviewlists/sentiment?movie_id='+movie_id+"&page="+page+"&sentiment="+sentiment
    console.log(reviewsUrl)
    let header_node = {
      headers: new HttpHeaders(
          { 'rejectUnauthorized': 'false' })
      };

    return this.http.get<Review[]>(reviewsUrl, header_node)
  }

  /**
   * Gets the list of reviews based on a selected keyword.
   * 
   * @param movie_id - The reference number of the movie.
   * @param page - The page number to load.
   * @param keyword - The keyword to filter the reviews by.
   * @returns a list of reviews for a movie filtered by the given keyword.
   */
  getKeywordReviews(movie_id: number, page: number, keyword:string): Observable<Review[]>{

    const reviewsUrl = 'https://www.reviewsense.net/reviewlists/keymatch?movie_id='+movie_id+"&page="+page+"&keyword="+keyword
    console.log(reviewsUrl)
    let header_node = {
      headers: new HttpHeaders(
          { 'rejectUnauthorized': 'false' })
      };

    return this.http.get<Review[]>(reviewsUrl, header_node)
  }

}