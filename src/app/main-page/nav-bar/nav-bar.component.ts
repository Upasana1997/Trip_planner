import { Component, OnInit,Input} from '@angular/core';

import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

 
  constructor() { 
    
  }
  public sign1 = true;
  public sign2 = false;
  public colorup = "white";
  public colorin = "lightgray";
  public signup(){
    this.sign1 = true;
    this.sign2= false;
    this.colorup="white";
    this.colorin="lightgray";
  }

  public signin(){
    this.sign2 = true;
    this.sign1 = false;
    this.colorup="lightgray";
    this.colorin="white";
  }
 
  ngOnInit() {
  }

}
