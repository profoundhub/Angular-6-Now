import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthGuard } from './auth.service';

@Injectable()

export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, 
              private router: Router,
              private user: UserService) { }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.isLoggedIn;
  }

}
