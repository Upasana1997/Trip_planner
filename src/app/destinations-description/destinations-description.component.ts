import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TrenDestinationsService} from '../tren-destinations.service';

@Component({
  selector: 'app-destinations-description',
  templateUrl: './destinations-description.component.html',
  styleUrls: ['./destinations-description.component.css']
})
export class DestinationsDescriptionComponent implements OnInit {

  constructor(private route:ActivatedRoute,private trenD:TrenDestinationsService){}
city:string;

public trenDest;
ngOnInit(){
  this.route.params.subscribe( params =>
      this.city = params['city']
  )
  this.trenDest= this.trenD.gettrenD(this.city);
  console.log(this.trenDest)
}
}
