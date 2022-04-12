import { Component, Input, OnInit } from '@angular/core';

import { Review } from '../review';

/**
 * Represents a review to display.
 */
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  /**The review to display. */
  @Input() review?: Review;

  /**
   * @ignore
   */
  constructor() { }
  
  /**
   * @ignore
   */
  ngOnInit(): void {
  }

}
