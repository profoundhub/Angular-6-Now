import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  getUserDetails(username, password) {
    // post details to API Server + return user info if correct.
    return this.http.post('./test/api/auth.php', {
      username,
      password
    }).subscribe(data => {
      console.log(data, " from server");
    });
  }

}
