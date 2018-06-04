import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  public imagePath='./assets/page-not-found/404_page_cover.jpg';
  constructor() { }

  ngOnInit() {
  }

}
