import { Component, OnInit, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ItineraryPlannerComponent } from './../itinerary-planner/itinerary-planner.component';
import { DataService } from "../data.service";
import { Http, HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { flight } from '../model/flights';
import { hotel } from '../model/hotels';
import { alltrips } from '../model/alltrips';
import { FlightsDataComponent } from '../flights-data/flights-data.component';
import { HotelsDataComponent } from '../hotels-data/hotels-data.component';

@Component({
  selector: 'app-trip-planned',
  templateUrl: './trip-planned.component.html',
  styleUrls: ['./trip-planned.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TripPlannedComponent implements OnInit {

  public start_date;
  public return_date;

  public username;
  public src;
  public dest;
  public trav;
  public start;
  public end;
  public res_flights: Array<flight>;
  public res_hotels: Array<hotel>;
  public prevtrips: Array<alltrips>;
  public CheckIn;
  public CheckOut;
  public Rooms;

  public date1;
  public day;
  public month;
  public year;
  public date;

  public tablefly=false;
  public tablehotel=false;
  public imagePath="./assets/tripped_plan/trip.jpg";
  constructor(private http:HttpClient,private data: DataService) {
    this. date1 = new Date();
    this.day = this.date1.getDate();
    this. month = this.date1.getMonth()+1;
    this.year = this.date1.getFullYear();
    if(this.month<10)
    this.month='0'+this.month;
    if(this.day<10)
    this.day='0'+this.day;
    
    this.date = this.year+'-'+this.month+'-'+this.day;
   }
  
  ngOnInit() {

    this.username = this.data.getdata();
    this.src = this.data.getsource();
    this.dest = this.data.getdest();
    this.trav = this.data.gettrav();
    this.start = this.data.getstart();
    this.end = this.data.getend();

    console.log(this.src);
    console.log(this.dest);
    console.log(this.trav);
    console.log(this.start);
    console.log(this.end);
  }

  /************************************************************************************************************ */
  public ytrip=true;
  public flight=false;
  public hotels=false;
  public roundtrip_id=false;
  
  public trip1()
  {
    this.imagePath="./assets/tripped_plan/trip.jpg";
    this.roundtrip_id=false;
    
    this.ytrip=true;
    this.flight=false;
    this.hotels=false;
    document.getElementById("yt_id").style.opacity="1";
    document.getElementById("flight_id").style.opacity="0.7";
    document.getElementById("hotel_id").style.opacity= "0.7";

  }

  public prev_trips()
  {
   
    this.ytrip=true;
  
    let data = {
      "email":this.username
   }
  console.log(data);
  this.http.post<alltrips[]>('http://localhost:4000/api/showprevtrips',data,{observe:'response'}).subscribe(
  response=>{        
  if(response.body !=null)
  {
    this.prevtrips = response.body;
    console.log(response.body);
    console.log("array of prevtrips");
    console.log(this.prevtrips);
  }
  else{
  swal("No Data Found");
  }
  
  },error=>{
  swal("Error!"," ","error");
  }
  );  
  }

  public fly()
  {
    this.imagePath="./assets/tripped_plan/flight.jpg";

    this.flight=true;
    this.ytrip=false;
    this.hotels=false;
    document.getElementById("flight_id").style.opacity="1";
    document.getElementById("yt_id").style.opacity="0.7";
    document.getElementById("hotel_id").style.opacity="0.7";

    
  }

 public showflights(flightForm : NgForm)
 {
   this.tablefly=true;
  let data = {
    "source":this.src,
    "destination":this.dest
 }
console.log(data);
this.http.post<flight[]>('http://localhost:4000/api/showflights',data,{observe:'response'}).subscribe(
response=>{        
if(response.body !=null)
{
  this.res_flights = response.body;
  console.log(response.body);
  console.log("array of flights");
  console.log(this.res_flights);
}
else{
swal("No flights found");
}

},error=>{
swal("Error!"," ","error");
}
);  
 }


  public hotel()
  {
    this.imagePath="./assets/tripped_plan/hotel.jpg";
    this.roundtrip_id=false;
    
    this.hotels=true;
    this.ytrip=false;
    this.flight=false;
    document.getElementById("hotel_id").style.opacity="1";
    document.getElementById("flight_id").style.opacity="0.7";
    document.getElementById("yt_id").style.opacity="0.7";
   
  }

  public showhotels(hotelForm: NgForm)
  {
    this.tablehotel=true;
    let data = {
      "country":this.dest
   }
console.log(data);
this.http.post<hotel[]>('http://localhost:4000/api/showhotels',data,{observe:'response'}).subscribe(
response=>{        
if(response.body !=null)
{
    this.res_hotels = response.body;
    console.log(response.body);
    console.log("array of hotels");
    console.log(this.res_hotels);
}
else{
 swal("Sorry!","No Hotels Found","error");
}

},error=>{
  swal("Error!"," ","error");
}
); 
  }

  public oneWay()
  {
    this.roundtrip_id=false;
    document.getElementById("one_way").style.textDecoration="underline";
    document.getElementById("round_trip").style.textDecoration="none";
    document.getElementById("round_trip").style.opacity="0.3";
    document.getElementById("one_way").style.opacity="1";

  }
  public roundTrip()
  {
    this.roundtrip_id=true;
    document.getElementById("round_trip").style.textDecoration="underline";
    document.getElementById("one_way").style.textDecoration="none";
    document.getElementById("one_way").style.opacity="0.3";
    document.getElementById("round_trip").style.opacity="1";
  }
  /*************************************************************************************************************** */
  // public ytrip=true;
  // public flight=false;
  // public hotels=false;
  // public trip1()
  // {
  //   this.ytrip=true;
  //   this.flight=false;
  //   this.hotels=false;
  //   document.getElementById("yt_id").style.backgroundColor="lightblue";
  //   document.getElementById("flight_id").style.backgroundColor="skyblue";
  //   document.getElementById("hotel_id").style.backgroundColor="skyblue";
  // }

  @ViewChild(FlightsDataComponent) 
  private childName: FlightsDataComponent;

  @ViewChild(HotelsDataComponent) 
  private childName1: HotelsDataComponent;

  public showTable:boolean =true;
  public toggleTableVisibility()
  {
    this.showTable=!(this.showTable);
  }

//   public fly()
//   {
//     this.flight=true;
//     this.ytrip=false;
//     this.hotels=false;
//     document.getElementById("flight_id").style.backgroundColor="lightblue";
//     document.getElementById("yt_id").style.backgroundColor="skyblue";
//     document.getElementById("hotel_id").style.backgroundColor="skyblue";

//     let data = {
//       "source":this.src,
//       "destination":this.dest
//    }
// console.log(data);
// this.http.post<flight[]>('http://localhost:4000/api/showflights',data,{observe:'response'}).subscribe(
// response=>{        
// if(response.body !=null)
// {
//     this.res_flights = response.body;
//     console.log(response.body);
//     console.log("array of flights");
//     console.log(this.res_flights);
// }
// else{
//  swal("No flights found");
// }

// },error=>{
// swal("Error!"," ","error");
// }
// );  

//   }

  public selectflightname:string;
  public flightselected(selectedflight)
  {
    this.selectflightname=selectedflight.airlines;
  }

  public bookflight()
  {
    let data = {
      "username" : this.username,
      "source" : this.src,
      "destination" : this.dest,
      "airlines" : this.selectflightname,
      "date": this.start_date,
      "return": this.return_date,
      "booking" : "booked"
   }
console.log(data);
this.http.post('http://localhost:4000/api/bookingflight',data,{observe:'response'}).subscribe(
response=>{        

if(response.body !=null)
{
  swal("Done","Flight booked successfully","success");
}
else{
 swal("Something went wrong!");
}

},error=>{
  swal("Error!"," ","error");
}
);
  }

//   public hotel()
//   {
//     this.hotels=true;
//     this.ytrip=false;
//     this.flight=false;
//     document.getElementById("hotel_id").style.backgroundColor="lightblue";
//     document.getElementById("flight_id").style.backgroundColor="skyblue";
//     document.getElementById("yt_id").style.backgroundColor="skyblue";

//     let data = {
//       "country":this.dest
//    }
// console.log(data);
// this.http.post<hotel[]>('http://localhost:4000/api/showhotels',data,{observe:'response'}).subscribe(
// response=>{        
// if(response.body !=null)
// {
//     this.res_hotels = response.body;
//     console.log(response.body);
//     console.log("array of hotels");
//     console.log(this.res_hotels);
// }
// else{
//  swal("Sorry!","No Hotels Found","error");
// }

// },error=>{
//   swal("Error!"," ","error");
// }
// );  


//   }

  public selecthotelname:string;
  public hotelselected(selectedhotel)
  {
    this.selecthotelname=selectedhotel.name;
  }


  public bookhotel(InoutForm : NgForm)
  {
    let data = {
      "username" : this.username,
      "country" : this.dest,
      "name" : this.selecthotelname,
      "checkin" : this.CheckIn,
      "checkout" : this.CheckOut,
      "rooms": this.Rooms,
      "booking" : "booked"
   }
console.log(data);
this.http.post('http://localhost:4000/api/bookinghotel',data,{observe:'response'}).subscribe(
response=>{        

if(response.body !=null)
{
  swal("Done","Hotel booked successfully","success");
}
else{
 swal("Something went wrong");
}

},error=>{
  swal("Error!"," ","error");
}
);
  }

  
}

