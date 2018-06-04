import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-nav-bar-login',
  templateUrl: './nav-bar-login.component.html',
  styleUrls: ['./nav-bar-login.component.css']
})
export class NavBarLoginComponent implements OnInit {

  public href=location.href;
  public username;

  constructor(private data: DataService) { }

  ngOnInit() {

    this.username = this.data.getdata();

  }

}
