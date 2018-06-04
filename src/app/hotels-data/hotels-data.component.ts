import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hotels-data',
  templateUrl: './hotels-data.component.html',
  styleUrls: ['./hotels-data.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HotelsDataComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() choosehotel; 
  
@Output()  selecthotel=new EventEmitter();    

public hotelselected(selectedhotel)
{
this.selecthotel.emit(selectedhotel);
console.log(`hotel selected : ${selectedhotel}`);
}

}
