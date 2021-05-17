import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecoverPWService {

  constructor() { }

  private emailInfo = new BehaviorSubject(undefined);
  sharedEmailInfo = this.emailInfo.asObservable();

  newEmail(email: any) {
    this.emailInfo.next(email);
  }
}
