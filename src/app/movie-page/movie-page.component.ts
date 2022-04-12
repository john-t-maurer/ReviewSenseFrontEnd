import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { Options } from '../options';
import { ReviewListComponent } from '../review-list/review-list.component';

/**
 * Represents the movie page.
 */
@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {

  /**The movie associated with this page. */
  @Input() movie?: Movie;

  /**The metadata of the movie, including its poster art and description. */
  metaData!: Observable<JSON>;

  /**The Options directive used to generate this movie page. */
  movieOptions: Options = {
    header: "All reviews for " + this.movie?.name,
    query: "",
    location: "Movie",
    page: String(this.route.snapshot.paramMap.get('page'))
  };

  /**A number representing which display to render. */
  display?: Number;

  /**The ReviewListComponent that is associated with this movie page. */
  @ViewChild('pageResults',{static: true}) input!: ReviewListComponent;

  /**
   * @ignore
   */
  constructor(
    private movieService:MovieService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private http: HttpClient
  ) { 
    setTimeout(()=>this.fillMetadata(this.metaData), 3000)
  }

  /**
   * Initializes the movie page.
   */
  ngOnInit(): void {
    this.getMovie();
    this.generateDisplay();
  }

  /**
   * Gets the movie this movie page is associated with.
   */
  getMovie(): void {
    const id = Number(this.route.snapshot.paramMap.get('movieid'));
    this.movieService.getMovie(id)
      .subscribe(movie => this.movie = movie);
  }

  /**
   * Generates the display to use based on this movie page based on the URL.
   */
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
   * Interprets the results from getMetadata() and configures how the movie page is generated as a result.
   * 
   * @param dataResponse - The JSON response recieved from getMetadata().
   */
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

  /**
   * Navigates to the next list of results.
   */
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

  /**
   * Navigates to the previous list of results.
   */
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

  /**
   * Gets the size of the review list in the ReviewListComponent.
   * 
   * @returns the size of the review list.
   */
  getSize(){
    console.log(this.input.getSize())
    return this.input.getSize()
  }

  /**
   * Instructs the router to go to the previously loaded page.
   */
  goBack(): void {
    this.location.back();
  }

}
