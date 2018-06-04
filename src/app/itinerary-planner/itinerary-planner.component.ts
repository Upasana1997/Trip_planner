import { Component, OnInit ,ViewChild, AfterViewInit,Input} from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { DataService } from "../data.service";
import { TripPlannedComponent } from './../trip-planned/trip-planned.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-itinerary-planner',
  templateUrl: './itinerary-planner.component.html',
  styleUrls: ['./itinerary-planner.component.css']
  
})
export class ItineraryPlannerComponent implements OnInit {
  public getemail:string;

   public Source;
   public Dest;
   public Trav;
   public Start;
   public End;
  
   public date1;
   public day;
   public month;
   public year;
   public date;
  public imagePath="./assets/images/img5.jpg";

  constructor(private http:HttpClient,private data: DataService, private router:Router) {
    this. date1 = new Date();
    this.day = this.date1.getDate();
    this. month = this.date1.getMonth()+1;
    this.year = this.date1.getFullYear();
    if(this.month<10)
    this.month='0'+this.month;
    if(this.day<10)
    this.day='0'+this.day;
    
    this.date = this.year+'-'+this.month+'-'+this.day;
    console.log(this.date);
  
   }
  
  

  public submitTrip(tripForm : NgForm)
  {
    console.log("Request submitted for form: ");
    let valuesToBeAdded = tripForm.value;
    console.log(valuesToBeAdded);

    console.log("username is:");
    console.log(this.getemail);

     let data = {

       "email" : this.getemail,
      "source" : this.Source,
     "destination" : this.Dest,
      "travellers" : this.Trav,
       "start" : this.Start,
       "end" : this.End
     }

     console.log("data is :");
    console.log(data);

    if(this.Start<this.End)
    {
      this.http.post('http://localhost:4000/api/flights',data,{observe: 'response'})
     .subscribe(response=>{
      
       let status = response.status;
       console.log(response.body);
       this.router.navigate(['itinerary-planner/your-trip']);

    })
  }

  else
  {
    swal("Error!","Incorrect Start date","error");
  }
   
    this.data.setsource(this.Source);
    this.data.setdest(this.Dest);
    this.data.settrav(this.Trav);
    this.data.setstart(this.Start);
    this.data.setend(this.End);
  }
  ngOnInit() {

    //console.log(this.getemail);
    this.getemail=this.data.getdata();
   console.log(this.getemail);
  }
 

}
