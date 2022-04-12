import { Component, OnInit, Input, ViewChild, ElementRef, HostListener, Output, EventEmitter} from '@angular/core';

import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { Options } from '../options';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HoverEvent } from '../HoverEvent';

/**
 * Represents a list of movies to display.
 */
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  /**The Options directive that instructs how the list is generated. */
  @Input() options?: Options;

  /**The size of this movie list. */
  @Output() size = new EventEmitter<number>();

  /**The movie that is currently hovered over by the mouse. */
  activeMovie: Movie | null = null;

  /**An array that holds the list of movies. */
  movies: Movie[] = [];

  /**Holds the element reference of the movie. */
  @ViewChild('wrapper') wrapper!: ElementRef;

  /**The x-coordinate of the movie tooltip. */
  x = '0';

  /**The y-coordinate of the movie tooltip. */
  y = '0';

  /**The width of the browser window. */
  public screenWidth: any;

  /**The height of the browser window. */
  public screenHeight: any;

  /**
   * @ignore
   */
  constructor(
    private movieService: MovieService,
  ) { }

  /**
   * Initializes the movie list.
   */
  ngOnInit(): void {
    this.getMovies();
    
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  /**The directive that the carousel supports. */
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

  /**
   * Gets the size of the list of movies.
   * @returns the size of the array of movies.
   */
  getSize(){
    return (this.movies.length);
  }

  /**
   * Gets the movies to populate the movies array with, depending on the Options directive.
   */
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
        this.movieService.getMovies(this.options?.page, this.options?.query).subscribe(movies => this.movies = movies);
    }

  }

  /**
   * Sets the movie information to display in the tooltip.
   * 
   * @param hoverEvent - The HoverEvent that keeps track of where the mouse is.
   */
  setActiveMovie(hoverEvent: HoverEvent | null) {
    if (hoverEvent) {

      let currentRect = this.wrapper.nativeElement.getBoundingClientRect();
      let x = hoverEvent.x - currentRect.x + 190;
      let y = hoverEvent.y - currentRect.y;
      let width = this.screenWidth;
    

      this.activeMovie = hoverEvent.movie;

      if((x + 505) > (width)) {
        this.x = `${x - (width - (x - 695))}px` ;
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

  /**A listener that fires off events whenever the screen size changes. */
  @HostListener('window:resize', ['$event'])

  /**
   * A function that handles whenever the HostListener senses a window resize.
   */
  onResize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

 
}
