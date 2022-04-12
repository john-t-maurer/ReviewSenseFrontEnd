import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Represents the menu bar on top of all pages.
 */
@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  /**The user's input from the textbox. */
  searchValue: string = "";

  /**
   * @ignore
   */
  constructor(private router: Router) { }

  /**
   * @ignore
   */
  ngOnInit(): void {
  }

  /**
   * Determines which key was pressed and navigates to the search results page.
   * 
   * @param event - The key event that triggered this function.
   */
  onSubmit(event: any){
    if(event.keyCode === 13 && this.searchValue !== ""){
      const query = this.searchValue;
      console.log(query);
      this.router.navigate(['search', query, 'page',0]).then(()=> window.location.reload());
    }
  }

  /**
   * Navigates back to the homepage.
   */
  return(){
    this.router.navigate(["home"]);
  }
}
