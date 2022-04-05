import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { Options } from '../options';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MovieComponent } from '../movie/movie.component';
import { Observable } from 'rxjs';
import { ReviewListComponent } from '../review-list/review-list.component';




@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {

  @Input() movie?: Movie;

  metaData!: Observable<JSON>;

  

  movieOptions: Options = {
    header: "All reviews for " + this.movie?.name,
    query: "",
    location: "Movie",
    page: String(this.route.snapshot.paramMap.get('page'))
  };

  display?: Number;

  

  

  constructor(
    private movieService:MovieService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private http: HttpClient
  ) { 
    setTimeout(()=>this.fillMetadata(this.metaData), 3000)

  }

  ngOnInit(): void {


    this.getMovie();
  
    
    
    this.generateDisplay();
    
    
  }

  getMovie(): void {
    const id = Number(this.route.snapshot.paramMap.get('movieid'));
    this.movieService.getMovie(id)
      .subscribe(movie => this.movie = movie);
  }

  generateDisplay(): void{
    if (this.location.path().includes("sentiment")){
      this.display = 1;
      this.movieOptions.location = 'Sentiment'

    }else if (this.location.path().includes("frequency")){
      this.display = 2;
      this.movieOptions.location = 'Frequency'

    }else{
      this.display = 0;
    }
  }

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

  fillMetadata(dataResponse : Observable<JSON>){
    this.movie!.name = this.movie!.name.replace('\"','\'')
    

    var dataResponse = this.getMetadata()

    
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

  nextPage() :void {
    var page = (Number.parseInt(this.movieOptions.page!) + 1)
    const id = Number(this.route.snapshot.paramMap.get('movieid'));
    if (this.route.snapshot.paramMap.get('word') != null){
      const term = this.route.snapshot.paramMap.get('word')
      this.router.navigate(['movie', id, 'page',page, 'frequency', term]).then(()=> window.location.reload());
    }else if(this.route.snapshot.paramMap.get('sentiment')!= null){
      const sentiment = this.route.snapshot.paramMap.get('sentiment')
      this.router.navigate(['movie', id, 'page',page, 'sentiment', sentiment]).then(()=> window.location.reload());
    }else{

      this.router.navigate(['movie', id, 'page',page]).then(()=> window.location.reload());
    }
  }

  lastPage() :void {
    var page = (Number.parseInt(this.movieOptions.page!) - 1)
    const id = Number(this.route.snapshot.paramMap.get('movieid'));
    if (this.route.snapshot.paramMap.get('word') != null){
      const term = this.route.snapshot.paramMap.get('word')
      this.router.navigate(['movie', id, 'page', page, 'frequency', term]).then(()=> window.location.reload());
    }else if(this.route.snapshot.paramMap.get('sentiment')!= null){
      const sentiment = this.route.snapshot.paramMap.get('sentiment')
      this.router.navigate(['movie', id, 'page' ,page, 'sentiment', sentiment]).then(()=> window.location.reload());
    }
    else{

      this.router.navigate(['movie', id, 'page',page]).then(()=> window.location.reload());
    }
  }

  @ViewChild('pageResults',{static: true}) input!: ReviewListComponent;

  getSize(){
    console.log(this.input.getSize())
    return this.input.getSize()
  }

  


  goBack(): void {
    this.location.back();
  }

}
