import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  searchValue: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(event: any){
    if(event.keyCode === 13 && this.searchValue !== ""){
      const query = this.searchValue;
      console.log(query);
      this.router.navigate(['search', query]);
    }
  }
}
