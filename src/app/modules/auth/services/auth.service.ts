import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'https://identitytoolkit.googleapis.com/v1/accounts';
  apiKey = 'AIzaSyDv0GLlFzPsH0W6iLkbed2ME7wMw98aXXw';
  userToken: string;

  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(private http:HttpClient) {
    this.userToken = '';
    this.readToken();
  }


  login(user: UserModel):Observable<any> {
    const authData = {
      email: user.email,
      password: user.password,
      returnSecureToken: true
    }

    return this.http.post(`${this.url}:signInWithPassword?key=${this.apiKey}`, authData)
  }

  signUp(user: UserModel):Observable<any> {
    const authData = {
      email: user.email,
      password: user.password,
      returnSecureToken: true
    }
    return this.http.post(`${this.url}:signUp?key=${this.apiKey}`, authData);
  }

  logOut(){
    localStorage.removeItem('token');
  }

  saveToken(idToken: string){
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    let today = new Date();
    today.setSeconds(3600);
    localStorage.setItem('expires', today.getTime().toString())
  }

  private readToken(){
    if(localStorage.getItem('token')){
      this.userToken = String(localStorage.getItem('token'));
    }else {
      this.userToken = '';
    }

    return this.userToken;
  }

  isAuthenticated(): boolean {
    if(this.userToken.length < 2){
      return false;
    }
    const expires = Number(localStorage.getItem('expires'));
    const todayExpire = new Date();
    todayExpire.setTime(expires);

    if(todayExpire > new Date()){
      return true;
    }else {
      return false;
    }
  }
}
