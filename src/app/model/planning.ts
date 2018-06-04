export class plan{

    public source: string;
    public destination: string;
    public travellers: string;
    public start: string;
    public end: string;

    constructor(source:string, destination:string, travellers:string, start:string, end:string)
    {
        this.source = source;
        this.destination = destination;
        this.travellers = travellers;
        this.start = start;
        this.end = end;
    }

}

