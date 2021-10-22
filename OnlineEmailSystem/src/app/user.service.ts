import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface myData {
  email: string,
  status: boolean,
}

interface isLoggedIn {
  status: boolean
}

interface logoutStatus {
  success: boolean
}
@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<myData>('http://localhost:8000/api/userdata')
  }

  isLoggedIn(): Observable<isLoggedIn> {
    console.log("enter in api")
    return this.http.get<isLoggedIn>('http://localhost:8000/api/isloggedin')
  }

  logout() {
    return this.http.get<logoutStatus>('http://localhost:8000/api/logout')
  }

}