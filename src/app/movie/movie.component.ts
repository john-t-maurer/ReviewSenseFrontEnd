import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { number } from 'echarts';
import { HoverEvent } from '../HoverEvent';

import { Movie } from '../movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  // Whether or not the movie is currently being hovered over
  activeHover = false;

  @Input() movie!: Movie;
  @ViewChild('wrapper') wrapper!: ElementRef;

  // Event containing hover details such as what movie and the x/y coordinates
  @Output() onHoverChanged = new EventEmitter<HoverEvent | null>();

  constructor() { }

  ngOnInit(): void {
  }

  /*
  * Set the hover state as active and update the parent component with the hover event details
  */
  setActiveHover(hover: boolean) {
    if (hover) {
      let rect = this.wrapper.nativeElement.getBoundingClientRect();
      this.onHoverChanged.emit(
        {
          movie: this.movie,
          x: rect.left,
          y: rect.top
        } as HoverEvent
      );
    } else {
      this.onHoverChanged.emit(null);
    }
    this.activeHover = hover;
  }

}
