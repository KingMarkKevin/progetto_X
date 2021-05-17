import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private  http: HttpClient) { }

  signin(email: string, psw : string) {
    const url = `http://localhost:3000/signIn/${email}/${psw}`;
    return this.http.get(url);
  }

  signup(nome: string, cognome :string, email: string, psw: string){
    const url = `http://localhost:3000/signup/${nome}/${cognome}/${email}/${psw}`;
    return this.http.get(url);
  }
  forgotPsw( email: string, cod : string){
    const url = `http://localhost:3000/forgotPassword/${email}/${cod}`;
    return this.http.get(url);
  }
  changeForgotPsw( email: string, cod :string, psw: string){
    const url = `http://localhost:3000/changeForgotPassword/${email}/${cod}/${psw}`;
    return this.http.get(url);
  }
  changePsw(email: string, oldpsw : string, newpsw : string){
    const url = `http://localhost:3000/change/${email}/${oldpsw}/${newpsw}`;
    return this.http.get(url);
  }
}
