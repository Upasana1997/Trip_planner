import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

//   private messageSource = new BehaviorSubject<string>("default message");
//   currentMessage = this.messageSource.asObservable();

//   constructor() { }

//   changeMessage(message: string) {
//     this.messageSource.next(message)
//}

private message: string;
private source: string;
private dest: string;
private trav: string;
private start: string;
private end: string;

    constructor() {
        this.message = "";
        this.source = "";
        this.dest = "";
        this.trav = "";
        this.start = "";
        this.end = "";
    }

    public setdata(val: string): void {
        this.message = val;
    }

    public setsource(val: string): void {
        this.source = val;
     }
 
     public setdest(val: string): void {
         this.dest = val;
      }

      public settrav(val: string): void {
        this.trav = val;
     }

     public setstart(val: string): void {
        this.start = val;
     }

     public setend(val: string): void {
        this.end = val;
     }

    public getdata(): string {
        return this.message;
    }

     public getsource(): string {
        return this.source;
    }

    public getdest(): string {
        return this.dest;
    }

    public gettrav(): string {
        return this.trav;
    }

    public getstart(): string {
        return this.start;
    }

    public getend(): string {
        return this.end;
    }

}