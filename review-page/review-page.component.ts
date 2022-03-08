import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Review } from '../review';

import { ReviewService } from '../review.service';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css']
})
export class ReviewPageComponent implements OnInit {

  review: Review | undefined;

  constructor(
    private reviewService: ReviewService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getReview();
  }

  getReview(): void {
    const id = String(this.route.snapshot.paramMap.get('reviewid'))
    this.reviewService.getReview(id).subscribe(review => this.review = review);
  }

  goBack(): void{
    this.location.back();
  }
}
