import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { CONSTANTS } from 'src/app/global/constans';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) {  }

  login(data: {email: string; password: string}){
    return this.http.post(`${CONSTANTS.URL_BASE_API}/auth/signin`, data)
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['auth'])
  }

  getTokenUser(){
    return localStorage.getItem(CONSTANTS.STORAGE_TOKEN)
  }

}
