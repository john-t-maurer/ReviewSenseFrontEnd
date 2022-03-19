import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Review } from './review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) { }

  getReviews(movieid: number): Observable<Review[]> {
    const reviewsUrl = 'https://www.reviewsense.net/reviewlists?movie_id='
    let header_node = {
      headers: new HttpHeaders(
          { 'rejectUnauthorized': 'false' })
      };
    console.log(reviewsUrl + movieid)
    return this.http.get<Review[]>(reviewsUrl + movieid, header_node)
  }

  getKeywords(movieid: number): Observable<[]> {
    const reviewsUrl = 'https://www.reviewsense.net/reviewlists/keywords?movie_id='
    let header_node = {
      headers: new HttpHeaders(
          { 'rejectUnauthorized': 'false' })
      };
    console.log(reviewsUrl + movieid)
    return this.http.get<[]>(reviewsUrl + movieid, header_node)
  }

  getReview(reviewid: string): Observable<Review>{
    const reviewsUrl = 'https://www.reviewsense.net/reviews?review_id='
    let header_node = {
      headers: new HttpHeaders(
          { 'rejectUnauthorized': 'false' })
      };
    console.log(reviewsUrl + reviewid)
    return this.http.get<Review>(reviewsUrl + reviewid, header_node)
  }

  getSentimentReviews(params: any): Observable<Review[]>{
    const movie_id = params[0]
    const sentiment = params[1]
    const reviewsUrl = 'https://www.reviewsense.net/reviewlists/sentiment?movie_id='+movie_id+"&sentiment="+sentiment
    console.log(reviewsUrl)
    let header_node = {
      headers: new HttpHeaders(
          { 'rejectUnauthorized': 'false' })
      };

    return this.http.get<Review[]>(reviewsUrl, header_node)
  }

  getKeywordReviews(params: any): Observable<Review[]>{
    const movie_id = params[0]
    const keyword = params[1]
    const reviewsUrl = 'https://www.reviewsense.net/reviewlists/keymatch?movie_id='+movie_id+"&keyword="+keyword
    console.log(reviewsUrl)
    let header_node = {
      headers: new HttpHeaders(
          { 'rejectUnauthorized': 'false' })
      };

    return this.http.get<Review[]>(reviewsUrl, header_node)
  }

}
