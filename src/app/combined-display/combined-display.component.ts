import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Movie } from 'movie';

/**
 * Represents the combined display on the movie page.
 */
@Component({
  selector: 'app-combined-display',
  templateUrl: './combined-display.component.html',
  styleUrls: ['./combined-display.component.css']
})
export class CombinedDisplayComponent implements OnInit {
  /**The movie associated with this display. */
  @Input() movie? : Movie;

  /**
   * @ignore
   */
  constructor(private http: HttpClient) {
  }

  /**
   * @ignore
   */
  ngOnInit(): void { 
  }
}
