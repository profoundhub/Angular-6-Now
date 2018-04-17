import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

  interface myData {
    success: boolean,
    message: string
  }

@Injectable()
export class AuthService {
  
  private loggedInStatus = false

  constructor(private http: HttpClient) { }
  
  get isLoggedIn() {
    return this.loggedInStatus
  }

  getUserDetails(username, password) {
    // post details to API Server + return user info if correct.
    return this.http.post<myData>('/api/auth.php', {
      username,
      password
    })
  }

}
