import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/**
 * Represents the word frequency display of the movie page.
 */
@Component({
  selector: 'app-word-frequency-display',
  templateUrl: './word-frequency-display.component.html',
  styleUrls: ['./word-frequency-display.component.css']
})
export class WordFrequencyDisplayComponent implements OnInit {
  /**The word that the reviews on this page are filtered by. */
  word = this.route.snapshot.paramMap.get('word')!;

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
