import { Component, OnInit } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private http:HttpClient) { }

   public name;
   public email;
   public contact;
   public feedb;

  ngOnInit() {
  }

  public submitfeedbackForm(feedbackForm : NgForm)
  {
     let data = {
       "name" : this.name,
       "email" : this.email,
       "contact" : this.contact,
       "feedback" : this.feedb
     }

     console.log(data);

    this.http.post('http://localhost:4000/api/feedback',data,{observe: 'response'})
    .subscribe(response=>{
      
      swal("Thank You!", "Your feedback has been submitted successfully!", "success");

    });
  }

}
