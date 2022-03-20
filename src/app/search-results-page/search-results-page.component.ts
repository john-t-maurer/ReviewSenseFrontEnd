import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Options } from '../options';
import { MovieListComponent } from '../movie-list/movie-list.component';

@Component({
  selector: 'app-search-results-page',
  templateUrl: './search-results-page.component.html',
  styleUrls: ['./search-results-page.component.css']
})
export class SearchResultsPageComponent implements OnInit {

  
  

  

  searchOptions: Options = {
    header: "Search Results",
    query: String(this.route.snapshot.paramMap.get('query')),
    location: "Search",
    page: String(this.route.snapshot.paramMap.get('page'))
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { 
    
  }

  ngOnInit(): void {
    
  }

  

  lastPage() :void {
    var page = (Number.parseInt(this.searchOptions.page!) - 1)
    this.router.navigate(['search', this.searchOptions.query, 'page',page]).then(()=> window.location.reload());
  }

  nextPage() :void {
    var page = (Number.parseInt(this.searchOptions.page!) + 1)
    this.router.navigate(['search', this.searchOptions.query, 'page',page]).then(()=> window.location.reload());
  }

  goBack(): void {
    this.location.back();
  }
  
  
  @ViewChild('searchResults',{static: true}) input!: MovieListComponent;

  getSize(){
    console.log(this.input.getSize())
    return this.input.getSize()
  }



  
}
