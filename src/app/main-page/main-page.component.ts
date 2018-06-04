import { Component, OnInit ,Input} from '@angular/core';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public imagePath="./assets/images/img6.jpg";
 
  destroy_interval;
  constructor() {
       this.change();
   }

   public change(){
    
    let images = [
      "./assets/images/img9.jpg",
      "./assets/images/img8.jpg",
      "./assets/images/img7.jpg",
      "./assets/images/img6.jpg",
      "./assets/images/img5.jpg",
      "./assets/images/img4.jpg",
      "./assets/images/img3.jpg",
      "./assets/images/img2.jpg",
      "./assets/images/img1.jpg"
    ];
    let i=0;

    this.destroy_interval = window.setInterval(function (){
      i++;
      if(i==images.length)
      i=0;
     document.getElementById("image-head1").style.backgroundImage="url('"+images[i]+"')";
    },15000);
  
    

  }
  ngOnInit() {
  }

  ngOnDestroy() {
    window.clearInterval(this.destroy_interval);
 }
}
