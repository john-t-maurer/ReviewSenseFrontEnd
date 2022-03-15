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

  getMetadata(colon?: string){
    const splitter = this.movie?.name.split('(');
    console.log(splitter)

    var title = splitter![0].trim().replace('\"', '\'');
    if (colon){
      title = title.split(':')[0]
      console.log(title)
    }

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

}
