import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { NgForm } from '@angular/forms';
import {TrenDestinationsService} from './tren-destinations.service';
import {DataService} from './data.service';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
// import { Http, HttpModule } from '@angular/http';
// import { HttpClient } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ItineraryPlannerComponent } from './itinerary-planner/itinerary-planner.component';
import { NavBarLoginComponent } from './nav-bar-login/nav-bar-login.component';
import { TrendingDestinationsComponent } from './trending-destinations/trending-destinations.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TripPlannedComponent } from './trip-planned/trip-planned.component';
import { FlightsDataComponent } from './flights-data/flights-data.component';
import { HotelsDataComponent } from './hotels-data/hotels-data.component';
import swal from 'sweetalert';
import { HotelsComponent } from './hotels/hotels.component';
import { FlightsComponent } from './flights/flights.component';
import { DestinationsDescriptionComponent } from './destinations-description/destinations-description.component';

const appRoutes: Routes=[
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'home',component : MainPageComponent},
  {path: 'itinerary-planner', component:ItineraryPlannerComponent},
  {path: 'about-us',component:AboutUsComponent},
  {path: 'itinerary-planner/your-trip',component:TripPlannedComponent},
  { path: 'details/:city', component: DestinationsDescriptionComponent },
  {path:'**',component:PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    NavBarComponent,
    FooterComponent,
    LoginComponent,
    ItineraryPlannerComponent,
    NavBarLoginComponent,
    TrendingDestinationsComponent,
    PageNotFoundComponent,
    FeedbackComponent,
    AboutUsComponent,
    TripPlannedComponent,
    FlightsDataComponent,
    HotelsDataComponent,
    HotelsComponent,
    FlightsComponent,
    DestinationsDescriptionComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TrenDestinationsService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
