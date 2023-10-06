import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HRSuiteSharedLibService {
  count: BehaviorSubject<number> = new BehaviorSubject(0);
  constructor() { }
  
  getCount(){
    return this.count;
   };
 
   incCount(count: number){
     this.count.next(count)
   };

}
