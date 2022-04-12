import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { ReviewService } from '../review.service';

/**
 * Represents the word cloud shown on the movie page.
 */
@Component({
  selector: 'app-word-cloud',
  templateUrl: './word-cloud.component.html',
  styleUrls: ['./word-cloud.component.css']
})
export class WordCloudComponent implements OnInit {

  /**The movie to get the keywords from. */
  @Input() movie?: Movie;

  /**The sentiment to filter the reviews by. */
  @Input() sentiment: string = 'neutral'
  
  /**The data structure that the word cloud supports. It consists of an array of tuples of type (word, fontSize). */
  data = [].map(function (d) {
      return { text: d[0], value: d[1]};
    })


  /**
   * @ignore 
   */
  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private movieService: MovieService,
    private reviewService: ReviewService
  ) { }

  /**
   * Initializes the word cloud.
   */
  ngOnInit(): void {
    this.getMovie();
    this.getKeywords();
  }

  /**
   * Gets the movie this word cloud is associated with.
   */
  getMovie(): void {
    const id = Number(this.actRoute.snapshot.paramMap.get('movieid'));
    this.movieService.getMovie(id)
      .subscribe(movie => this.movie = movie);
  }

  /**
   * Gets the word that was clicked and navigates to the corresponding page based on which word was clicked.
   * 
   * @param event - The click event that caused this function to fire.
   */
  onWordClick(event: any){
    const movieId = Number(this.actRoute.snapshot.paramMap.get('movieid'));
    const page = Number(this.actRoute.snapshot.paramMap.get('page'));
    this.router.navigate(['movie', movieId, 'page', page,'frequency', event.word.text]);
  }

  /**
   * Gets the keywords this word cloud is associated with based on the movie and chosen sentiment.
   */
  getKeywords() {
    const id = Number(this.actRoute.snapshot.paramMap.get('movieid'));  
    const page = Number(this.actRoute.snapshot.paramMap.get('page'));  
    this.reviewService.getKeywords(id, this.sentiment!).subscribe((res: any) => this.data = res.map(function (d: any){
      return { text: d[0], value: parseInt(d[1])};
    })) 
  } 
}
