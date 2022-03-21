import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sentiment-display',
  templateUrl: './sentiment-display.component.html',
  styleUrls: ['./sentiment-display.component.css']
})
export class SentimentDisplayComponent implements OnInit {

  sentiment = this.route.snapshot.paramMap.get('sentiment')!;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
