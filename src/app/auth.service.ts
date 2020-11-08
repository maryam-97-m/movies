import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable , BehaviorSubject} from 'rxjs';
import {UserData} from './userData'
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _router: any;

  constructor(public _HttpClient:HttpClient ) { 

  }
  userData = new BehaviorSubject(null);
  signUp(data):Observable<any>
  {
    return this._HttpClient.post('https://routeegypt.herokuapp.com/signup',data);
  }
  signIn(data):Observable<any>
  {
    return this._HttpClient.post('https://routeegypt.herokuapp.com/signin',data);
  
  }
  loggedIn()
  {
    return !!localStorage.getItem('token');
  }
  logoutUser()
  {
    localStorage.removeItem('token');
    this._router.navigate(['home']);
  }
  

  saveUserData(citizen , token)
  {
    let user= new UserData(citizen.first_name , citizen.last_name , citizen.email , token);
    this.userData.next(user) ;

  }
}
