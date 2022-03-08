import { Component, OnInit } from '@angular/core';

import { Options } from '../options';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  homeOptions: Options = {
    header: "Things to Watch",
    query: "",
    location: "Home"
  };

  lowOptions: Options = {
    header: "Lowest Ratings",
    query: "",
    location: "Lowest"
  };

  highOptions: Options = {
    header: "Highest Ratings",
    query: "",
    location: "Highest"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
