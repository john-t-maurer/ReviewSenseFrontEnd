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

  getReviews(movieid: number, page: number): Observable<Review[]> {
    const reviewsUrl = 'https://www.reviewsense.net/reviewlists?movie_id='+movieid + "&page="+page
    let header_node = {
      headers: new HttpHeaders(
          { 'rejectUnauthorized': 'false' })
      };
    console.log(reviewsUrl)
    return this.http.get<Review[]>(reviewsUrl, header_node)
  }

  getKeywords(movieid: number, sentiment: string): Observable<[]> {
    const reviewsUrl = 'https://www.reviewsense.net/reviewlists/keywords?movie_id=' + movieid + "&sentiment=" + sentiment
    let header_node = {
      headers: new HttpHeaders(
          { 'rejectUnauthorized': 'false' })
      };
    console.log(reviewsUrl + movieid)
    return this.http.get<[]>(reviewsUrl, header_node)
  }

  getPieChart(movieid: number,page: number, keyword: string): Observable<[]> {
    const reviewsUrl = 'https://www.reviewsense.net/reviewlists/sentiment/count?movie_id=' + movieid + "&page=" + page + '&keyword=' + keyword
    let header_node = {
      headers: new HttpHeaders(
          { 'rejectUnauthorized': 'false' })
      };
    console.log(reviewsUrl + movieid)
    return this.http.get<[]>(reviewsUrl, header_node)
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

  getSentimentReviews(movie_id: number, page: number, sentiment:string): Observable<Review[]>{

    const reviewsUrl = 'https://www.reviewsense.net/reviewlists/sentiment?movie_id='+movie_id+"&page="+page+"&sentiment="+sentiment
    console.log(reviewsUrl)
    let header_node = {
      headers: new HttpHeaders(
          { 'rejectUnauthorized': 'false' })
      };

    return this.http.get<Review[]>(reviewsUrl, header_node)
  }

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