import { Injectable } from '@angular/core';
import {trenD} from './constants/tren-dest.constants';
@Injectable()
export class TrenDestinationsService {

  private trenDest=trenD;
  constructor() { }

  public gettrenDest()
  {
    return this.trenDest;
  }
  public gettrenD(city: any)
  {
    function isDest(c) { 
      return c.city === city;
  }
  
  return this.trenDest.find(isDest);
    
  }

}
