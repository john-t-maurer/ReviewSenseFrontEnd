import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-word-cloud',
  templateUrl: './word-cloud.component.html',
  styleUrls: ['./word-cloud.component.css']
})
export class WordCloudComponent implements OnInit {

  @Input() movie?: Movie;
  
  data = [
    "Hello", "world", "normally", "you", "want", "more", "words",
    "than", "this"].map(function (d) {
      return { text: d, value: 30};
    })

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.getMovie();
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
}
