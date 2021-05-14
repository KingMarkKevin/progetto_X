import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userInfo = new BehaviorSubject(undefined);
  shareduserInfo = this.userInfo.asObservable();

  constructor() { }

  newUser(user: any) {
    this.userInfo.next(user)
  }
}
