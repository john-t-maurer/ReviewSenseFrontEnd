import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Options } from '../options';
import { MovieListComponent } from '../movie-list/movie-list.component';

/**
 * Represents the search results page.
 */
@Component({
  selector: 'app-search-results-page',
  templateUrl: './search-results-page.component.html',
  styleUrls: ['./search-results-page.component.css']
})
export class SearchResultsPageComponent implements OnInit {
  
  /**The Options directive that instructs how the page is generated. */
  searchOptions: Options = {
    header: "Search Results",
    query: String(this.route.snapshot.paramMap.get('query')),
    location: "Search",
    page: String(this.route.snapshot.paramMap.get('page'))
  };

  /**The MovieListComponent that is associated with this search results page. */
  @ViewChild('searchResults',{static: true}) input!: MovieListComponent;

  /**
   * @ignore 
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  /**
   * @ignore
   */
  ngOnInit(): void {
    
  }

  /**
   * Navigates to the previous list of results.
   */
  lastPage() :void {
    var page = (Number.parseInt(this.searchOptions.page!) - 1)
    this.router.navigate(['search', this.searchOptions.query, 'page',page]).then(()=> window.location.reload());
  }
  /**
   * Navigates to the next list of results.
   */
  nextPage() :void {
    var page = (Number.parseInt(this.searchOptions.page!) + 1)
    this.router.navigate(['search', this.searchOptions.query, 'page',page]).then(()=> window.location.reload());
  }

  /**
   * Instructs the router to go to the previously loaded page.
   */
  goBack(): void {
    this.location.back();
  }

  /**
   * Gets the size of the list of movies in the MovieListComponent.
   * 
   * @returns the size of the list of movies.
   */
  getSize(){
    console.log(this.input.getSize())
    return this.input.getSize()
  }



  
}
