import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { HoverEvent } from '../HoverEvent';
import { Movie } from '../movie';

/**
 * Represents a movie to display.
 */
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  /**A boolean that determines whether the current movie is active or not. */
  activeHover = false;

  /**The movie to display. */
  @Input() movie!: Movie;

  /**Holds the element reference of the movie. */
  @ViewChild('wrapper') wrapper!: ElementRef;

  /**An event containing hover details such as the movie and its coordinates. */
  @Output() onHoverChanged = new EventEmitter<HoverEvent | null>();

  /**
   * @ignore
   */
  constructor(private http: HttpClient) { 
  }

  /**
   * Initializes the movie.
   */
  ngOnInit(): void {
    this.movie!.name = this.movie!.name.replace('\"','\'')

    var dataResponse = this.getMetadata('(')

    
    dataResponse.subscribe((data:any)=>{
      if(data.res)
     this.movie!.poster_url = 'https://image.tmdb.org/t/p/w220_and_h330_face'+ data.results[0].poster_path
    }
     )

    if (this.movie!.poster_url){
      dataResponse.subscribe((data:any)=> this.movie!.overview = data.results[0].overview)
    }else{
      var dataResponse = this.getMetadata(':')
      dataResponse.subscribe((data:any)=> this.movie!.poster_url = 'https://image.tmdb.org/t/p/w220_and_h330_face'+ data.results[0].poster_path)
      dataResponse.subscribe((data:any)=> this.movie!.overview = data.results[0].overview)
    }

  }

  /**
   * Obtains the movie's metadata, such as its poster art, release year, and description.
   * 
   * @param colon - A parameter that instructs the function to trim the title if it contains a colon.
   * @returns the movie's metadata.
   */
  getMetadata(colon?: string){
    const splitter = this.movie?.name.split('(');
    var title = splitter![0].trim().replace('\"', '\'');

    if (colon){title = title.split(':')[0]}

    var searchUrl = 'https://api.themoviedb.org/3/search/multi?api_key=f213c4954a309bf85342338cab0ba8a6&language=en-US&query='+ title + '&page=1';

    if (splitter!.length > 1){
      var year = splitter![1].replace(')','').replace('-','').trim();
      var searchUrl = 'https://api.themoviedb.org/3/search/multi?api_key=f213c4954a309bf85342338cab0ba8a6&language=en-US&query='+ title +'&year=' + year +'&page=1';
    }

    let header_node = {
      headers: new HttpHeaders(
          { 'rejectUnauthorized': 'false',
            }),
    
    };
    console.log(searchUrl)
    return this.http.get<JSON>(searchUrl, {responseType:'json'})
  }

  /**
   * Sets the hover state as active and updates the parent component with the hover event details.
   * 
   * @param hover - Determines if the current movie is being hovered.
   */
  setActiveHover(hover: boolean) {
    if (hover) {
      let rect = this.wrapper.nativeElement.getBoundingClientRect();
      this.onHoverChanged.emit(
        {
          movie: this.movie,
          x: rect.x,
          y: rect.y
        } as HoverEvent
      );
    } else {
      this.onHoverChanged.emit(null);
    }
    this.activeHover = hover;
  }

}
