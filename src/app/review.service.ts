import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Review } from './review';
import { REVIEWS } from './fake-reviews';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor() { }

  getReviews(): Observable<Review[]> {
    const reviews = of(REVIEWS);
    return reviews;
  }

  getReview(id: string): Observable<Review> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const review = REVIEWS.find(rev => rev.review_id === id)!;
    return of(review);
  }
}
