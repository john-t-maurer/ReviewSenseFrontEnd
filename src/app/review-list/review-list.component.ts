import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Review } from '../review';
import { ReviewService } from '../review.service';
import { Options } from '../options';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  @Input() options?: Options;

  reviews: Review[] = [];

  constructor(
    private reviewService: ReviewService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getReviews();
  }

  getReviews(): void{
    switch(this.options?.location){
      case "Movie": 
        this.reviewService.getReviews(Number(this.route.snapshot.paramMap.get('movieid'))).subscribe(reviews => this.reviews = reviews);
        break;
      case "Sentiment":
        this.reviewService.getSentimentReviews([Number(this.route.snapshot.paramMap.get('movieid')), String(this.route.snapshot.paramMap.get('sentiment'))]).subscribe(reviews => this.reviews = reviews);
        break;
      case "Frequency":
        this.reviewService.getKeywordReviews([Number(this.route.snapshot.paramMap.get('movieid')), String(this.route.snapshot.paramMap.get('word'))]).subscribe(reviews => this.reviews = reviews);
    }
  }

}
