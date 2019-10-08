import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseurl = 'http://127.0.0.1:3000/api';
  private isValid: boolean;
  constructor(private http: HttpClient) { this.validateUser(); }

  validateUser(): Observable<any> {
    return this.http.get(this.baseurl);
  }

  loggedIn(user: any) {
    return this.http.post<any>(this.baseurl + '/login', user);
  }
}
