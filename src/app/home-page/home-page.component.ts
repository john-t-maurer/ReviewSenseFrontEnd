import { Component, OnInit } from '@angular/core';

import { Options } from '../options';

/**
 * Represents the homepage.
 */
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  /**The Options directive used to generate the "Things to Watch" carousel. */
  homeOptions: Options = {
    header: "Things to Watch",
    query: "",
    location: "Home"
  };

  /**The Options directive used to generate the "Lowest Ratings" carousel. */
  lowOptions: Options = {
    header: "Lowest Ratings",
    query: "",
    location: "Lowest"
  };

  /**The Options directive used to generate the "Highest Ratings" carousel. */
  highOptions: Options = {
    header: "Highest Ratings",
    query: "",
    location: "Highest"
  };

  /**
   * @ignore
   */
  constructor() { }

  /**
   * @ignore
   */
  ngOnInit(): void {
  }

}
