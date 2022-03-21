import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-word-cloud',
  templateUrl: './word-cloud.component.html',
  styleUrls: ['./word-cloud.component.css']
})
export class WordCloudComponent implements OnInit {

  @Input() movie?: Movie;
  @Input() sentiment: string = 'neutral'
  
  data = [].map(function (d) {
      return { text: d[0], value: d[1]};
    })



  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private movieService: MovieService,
    private reviewService: ReviewService
  ) { }

  ngOnInit(): void {
    this.getMovie();
    this.getKeywords();
  }

  getMovie(): void {
    const id = Number(this.actRoute.snapshot.paramMap.get('movieid'));
    this.movieService.getMovie(id)
      .subscribe(movie => this.movie = movie);
  }

  onWordClick(event: any){
    const movieId = Number(this.actRoute.snapshot.paramMap.get('movieid'));
    this.router.navigate(['movie', movieId, 'frequency', event.word.text]);
  }

  getKeywords() {
    const id = Number(this.actRoute.snapshot.paramMap.get('movieid'));  
    this.reviewService.getKeywords(id, this.sentiment!).subscribe((res: any) => this.data = res.map(function (d: any){
      return { text: d[0], value: parseInt(d[1])};
    })) 
  } 
}
