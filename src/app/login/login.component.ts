import { Component, OnInit, Input } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import * as $ from 'jquery';
import 'rxjs/add/operator/map';
import { URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';
import { DataService } from "../data.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {

  @Input() signUp : Boolean;
  @Input() signIn : Boolean;
  @Input() check : Boolean;
  @Input() colorup1 : string;
  @Input() colorin1 : string; 

  public fname;
  public Email:string;
  public Password="";
  

  constructor(private http:HttpClient,private router:Router,private data: DataService) {
    
  }
  
  public signup()
  {
    this.signUp=true;
    this.signIn=false;
    document.getElementById("sign-up").style.backgroundColor = "white";
    document.getElementById("sign-in").style.backgroundColor = "lightgray";
  }
  public signin(){
    this.signUp=false;
    this.signIn=true;
    document.getElementById("sign-in").style.backgroundColor = "white";
    document.getElementById("sign-up").style.backgroundColor = "lightgray";
  }

  
  
  public checksignin(signinForm : NgForm)
  {
    // let valuesToBeAdded=signinForm.value;
    // console.log(valuesToBeAdded);
    let data = {
             "email":this.Email,
             "pwd":this.Password
          }
    console.log(data);
    this.http.post('http://localhost:4000/api/login',data,{observe:'response'}).subscribe(
    response=>{         
      // this.checklogin = true;                        //response function using arrow function can also be written as function(response){}
      //  this.res_value = response;
      //  console.log("response value :" + response);
      //  console.log("checkingggg sign in :"+ this.res_value);
      if(response.body !=null)
      {
        this.data.setdata(this.Email);
        this.router.navigate(['/itinerary-planner']);
      }
      else{
        swal("Error!", "Enter correct Email and Password!", "error");
      }

},error=>{
      swal("Error!"," ","error");
    }
    );  
  }

   ngOnInit() {
     
    // this.data.currentMessage.subscribe(message => this.Email = message)
    
  }

  public submitsignupForm(signupForm : NgForm)
  {
    //window.alert("why are you not working?");
    console.log("Request submitted for form: ");
    let valuesToBeAdded = signupForm.value;
    console.log(valuesToBeAdded);
    if(valuesToBeAdded.pwd==valuesToBeAdded.repwd)
    {
      // this.router.navigate(['/itinerary-planner']);
    this.http.post('http://localhost:4000/api/signup',valuesToBeAdded,{observe: 'response'})
     .subscribe(response=>{
      
       let status = response.status;
       console.log(response.body);
    
       swal("Done!", "Successfully signed up!", "success");


     })
    }
    else
    {
      swal("Error!", "Passwords do not match!", "error");
    }
  }

}
