import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-word-frequency-display',
  templateUrl: './word-frequency-display.component.html',
  styleUrls: ['./word-frequency-display.component.css']
})
export class WordFrequencyDisplayComponent implements OnInit {

  word = this.route.snapshot.paramMap.get('word')!;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
