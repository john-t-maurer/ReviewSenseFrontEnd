import { Component, OnInit } from '@angular/core';

import { Options } from '../options';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  options: Options = {
    header: "Things to Watch",
    query: "",
    onHomepage: true
  };

  constructor() { }

  ngOnInit(): void {
  }

}
