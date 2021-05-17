import { HttpClient } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { RecoverPWService } from '../recover-pw.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  pass: string;
  obsLogin: Observable<object>;
  results: any = undefined;
  isAuthorized: boolean;
  pwErr: string;

  constructor(private auth: AuthService, private router: Router, private user : UserService, private recover: RecoverPWService) { }

  submit(email: HTMLInputElement, pass: HTMLInputElement) {
    this.email = email.value;
    this.pass = pass.value;
    this.obsLogin = this.auth.signin(this.email, this.pass);

    this.obsLogin.subscribe(this.getData);
    //this.recover.newEmail(this.email);
  }

  getData = (data) => {
    this.results = data[0];
    if (this.results != undefined) {
      this.user.newUser(this.results);
      this.router.navigate(['/login']);
    }
    else{
      this.pwErr = "La password e/o email inseriti sono errati";
    }
  }

  ngOnInit(): void {
    this.user.shareduserInfo.subscribe(message => this.results = message);
    if (this.results = undefined) {
      this.isAuthorized = true;
    }
  }

  logout(){
    this.results = undefined;
    this.user.newUser(undefined);
    this.isAuthorized = false;
  }

}

