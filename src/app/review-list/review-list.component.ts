import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Review } from '../review';
import { ReviewService } from '../review.service';
import { Options } from '../options';

/**
 * Represents a list of reviews to display.
 */
@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  /**The Options directive that instructs how this review list is generated. */
  @Input() options?: Options;

  /**The size of this review list. */
  @Output() size = new EventEmitter<number>();

  /**An array that holds the list of reviews. */
  reviews: Review[] = [];

  /**
   * @ignore
   */
  constructor(
    private reviewService: ReviewService,
    private route: ActivatedRoute
  ) { }

  /**
   * Initializes the review list.
   */
  ngOnInit(): void {
    this.getReviews();
  }

  /**
   * Gets the size of the list of reviews.
   * @returns the size of the array of reviews.
   */
  getSize(){
    return this.reviews.length;
  }

  /**
   * Gets the reviews to populate the reviews array with, depending on the Options directive.
   */
  getReviews(): void{
    switch(this.options?.location){
      case "Movie": 
        this.reviewService.getReviews(Number(this.route.snapshot.paramMap.get('movieid')), Number(this.route.snapshot.paramMap.get('page'))).subscribe(reviews => this.reviews = reviews);
        break;
      case "Sentiment":
        this.reviewService.getSentimentReviews(Number(this.route.snapshot.paramMap.get('movieid')), Number(this.route.snapshot.paramMap.get('page')), String(this.route.snapshot.paramMap.get('sentiment'))).subscribe(reviews => this.reviews = reviews);
        break;
      case "Frequency":
        this.reviewService.getKeywordReviews(Number(this.route.snapshot.paramMap.get('movieid')), Number(this.route.snapshot.paramMap.get('page')), String(this.route.snapshot.paramMap.get('word'))).subscribe(reviews => this.reviews = reviews);
    }
  }

}
