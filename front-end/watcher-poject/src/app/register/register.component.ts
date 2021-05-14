import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import {Md5} from "md5";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  nome: string;
  cognome: string;
  email: string;
  pass: string;
  obsReg: Observable<Object>;
  results: any;
  operation: undefined;

  constructor(private auth: AuthService, private router: Router, private user: UserService) { }

  submit(nome: HTMLInputElement, cognome: HTMLInputElement, email: HTMLInputElement, pass: HTMLInputElement){
    this.nome = nome.value;
    this.cognome = cognome.value;
    this.email = email.value;
    this.pass = pass.value;
    this.obsReg = this.auth.signup(this.nome, this.cognome,this.email, this.pass);
    this.obsReg.subscribe(this.getData);
  }

  getData = (data)=>{
    this.results = data[0];
  }
    
  ngOnInit(): void {}

}
