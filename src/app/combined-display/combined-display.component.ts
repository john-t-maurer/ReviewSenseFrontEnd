import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'movie';
import { MovieComponent } from '../movie/movie.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-combined-display',
  templateUrl: './combined-display.component.html',
  styleUrls: ['./combined-display.component.css']
})
export class CombinedDisplayComponent implements OnInit {

  @Input() movie? : Movie;

  

  constructor(private http: HttpClient) {
    
   }

  ngOnInit(): void {
    
  }

  


}
