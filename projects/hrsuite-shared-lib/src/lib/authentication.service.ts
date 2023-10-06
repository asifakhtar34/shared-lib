import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
   userName: BehaviorSubject<string> = new BehaviorSubject("")
  constructor() { }

  getUserName(){
   return this.userName;
  };

  setUserName(name: string){
    this.userName.next(name)
  };
}
