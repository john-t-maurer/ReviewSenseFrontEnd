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

  getReview(reviewid: string): Observable<Review>{
    const reviewsUrl = 'https://www.reviewsense.net/reviews?review_id='
    let header_node = {
      headers: new HttpHeaders(
          { 'rejectUnauthorized': 'false' })
      };
    console.log(reviewsUrl + reviewid)
    return this.http.get<Review>(reviewsUrl + reviewid, header_node)
  }
}
