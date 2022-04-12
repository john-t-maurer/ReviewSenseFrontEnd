import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Review } from '../review';
import { ReviewService } from '../review.service';

/**
 * Represents the review page.
 */
@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css']
})
export class ReviewPageComponent implements OnInit {
  
  /**The review associated with this page. */
  review: Review | undefined;

  /**
   * @ignore
   */
  constructor(
    private reviewService: ReviewService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  /**
   * Initializes the review page.
   */
  ngOnInit(): void {
    this.getReview();
  }

  /**
   * Gets the review this review page is associated with.
   */
  getReview(): void {
    const id = String(this.route.snapshot.paramMap.get('reviewid'))
    this.reviewService.getReview(id).subscribe(review => this.review = review);
  }

  /**
   * Instructs the router to go to the previously loaded page.
   */
  goBack(): void{
    this.location.back();
  }
}
