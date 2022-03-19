import { Component, OnInit, Input, ViewChild, ElementRef, HostListener  } from '@angular/core';

import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { Options } from '../options';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HoverEvent } from '../HoverEvent';
import { AngularD3CloudComponent } from 'angular-d3-cloud';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Input() options?: Options;

  // The currently hovered movie
  activeMovie: Movie | null = null;
  movies: Movie[] = [];

  @ViewChild('wrapper') wrapper!: ElementRef;

  // The x and y coordinates of the movieInfoPopup
  x = '0';
  y = '0';
  public screenWidth: any;
  public screenHeight: any;

  constructor(
    private movieService: MovieService,
  ) { }

  ngOnInit(): void {
    this.getMovies();
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  customOptions: OwlOptions = {
    loop: true,
    autoWidth: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['< <', '> >'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  getMovies(): void {
    switch (this.options?.location) {
      case "Home":
        this.movieService.getHomepage().subscribe(movies => this.movies = movies);
        break;
      case "Lowest":
        this.movieService.getLowestSentiment().subscribe(movies => this.movies = movies);
        break;
      case "Highest":
        this.movieService.getHighestSentiment().subscribe(movies => this.movies = movies);
        break;
      case "Search":
        this.movieService.getMovies(this.options?.query).subscribe(movies => this.movies = movies);
    }

  }

  /*
   * Set the movie info to display in the popup
   */
  setActiveMovie(hoverEvent: HoverEvent | null) {
    if (hoverEvent) {

      let currentRect = this.wrapper.nativeElement.getBoundingClientRect();
      let x = hoverEvent.x - currentRect.x;
      let y = hoverEvent.y - currentRect.y;
      let width = this.screenWidth;
    

      this.activeMovie = hoverEvent.movie;

      if((hoverEvent.x + 500)> (width)) {
        this.x = `${hoverEvent.x - (width - hoverEvent.x)}px` ;
      } else {
        this.x = `${x}px`;
      }   
      this.y = `${y + 20}px`;
    } else {
      this.activeMovie = null;
      this.x = '0';
      this.y = '0';
    }
  }

  @HostListener('window:resize', ['$event'])

  onResize(event: any) {

    this.screenWidth = window.innerWidth;

    this.screenHeight = window.innerHeight;

  }
}
