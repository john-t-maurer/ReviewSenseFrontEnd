import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/**
 * Represents the sentiment display shown on the movie page.
 */
@Component({
  selector: 'app-sentiment-display',
  templateUrl: './sentiment-display.component.html',
  styleUrls: ['./sentiment-display.component.css']
})
export class SentimentDisplayComponent implements OnInit {
  /**The sentiment that the reviews on this page are filtered by. */
  sentiment = this.route.snapshot.paramMap.get('sentiment')!;

  /**
   * @ignore
   */
  constructor(private route: ActivatedRoute) { }

  /**
   * @ignore
   */
  ngOnInit(): void {
  }

}
