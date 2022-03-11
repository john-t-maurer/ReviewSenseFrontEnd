import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Movie } from '../movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movie?: Movie;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log(this.movie?.name)
    try{
      var dataResponse = this.getMetadata('(')
      dataResponse.subscribe((data:any)=> this.movie!.poster_url = 'https://image.tmdb.org/t/p/w220_and_h330_face'+ data.results[0].poster_path)
      dataResponse.subscribe((data:any)=> this.movie!.overview = data.results[0].overview)
    }catch (TypeError){
      console.log("No poster found")
    }
  }

  getMetadata(delimiter: string){
    var title = this.movie?.name.split(delimiter)[0]
    console.log(title)
    let header_node = {
      headers: new HttpHeaders(
          { 'rejectUnauthorized': 'false',
            }),
      
    };
    return this.http.get<JSON>('https://api.themoviedb.org/3/search/multi?api_key=f213c4954a309bf85342338cab0ba8a6&language=en-US&query='+ title + '&page=1&include_adult=true', {responseType:'json'})
  }

}
