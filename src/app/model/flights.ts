export class flight{
  
    public airlines:string;
    public source:string;
    public destination:string;
    public arrival:string;
    public departure:string;
    public fare:string;
    
    constructor( airlines:string,source:string,destination:string,arrival:string,departure:string,fare:string)
    {
       this.airlines = airlines;
       this.source = source;
       this.destination = destination;
       this.arrival = arrival;
       this.departure = departure;
       this.fare = fare;
    }

}