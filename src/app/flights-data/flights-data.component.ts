import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-flights-data',
  templateUrl: './flights-data.component.html',
  styleUrls: ['./flights-data.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FlightsDataComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() chooseflight; 
  
@Output()  selectflight=new EventEmitter();    

public flightselected(selectedflight)
{
this.selectflight.emit(selectedflight);
console.log(`flight selected : ${selectedflight}`);
}

}
