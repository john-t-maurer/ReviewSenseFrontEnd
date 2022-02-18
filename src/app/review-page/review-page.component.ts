import { Component, OnInit } from '@angular/core';

import { Movie } from '../movie';
import { Review } from '../review';

import { MovieService } from '../movie.service';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css']
})
export class ReviewPageComponent implements OnInit {

  review: Review = {
    review_id: '',
    reviewer: '',
    movie_id: 0,
    rating: 0,
    review_summary: '',
    review_date: '',
    review_detail: ''
  };

  movie: Movie = {
    ref_num: 0,
    name: '',
    tags: []
  }

  constructor(private movieService: MovieService, private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.getMovie();
    this.getReview();
  }

  getReview(): void {
    this.reviewService.getReview('1').subscribe(review => this.review = review);
  }

  getMovie(): void {
    this.movieService.getMovie(1).subscribe(movie => this.movie = movie);
  }

}
