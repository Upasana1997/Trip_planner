import { Component, OnInit } from '@angular/core';
import {TrenDestinationsService} from '../tren-destinations.service';

@Component({
  selector: 'app-trending-destinations',
  templateUrl: './trending-destinations.component.html',
  styleUrls: ['./trending-destinations.component.css']
})
export class TrendingDestinationsComponent implements OnInit {

  public trenDest;

  constructor(private trenD:TrenDestinationsService) { 
    this.trenDest=trenD.gettrenDest();
  }

  ngOnInit() {
  }

}
