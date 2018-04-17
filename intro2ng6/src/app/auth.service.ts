import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }
  
  get isLoggedIn() {
    return this.loggedInStatus
  }

  getUserDetails(username, password) {
    // post details to API Server + return user info if correct.
    return this.http.post('/api/auth.php', {
      username,
      password
    })
  }

}
