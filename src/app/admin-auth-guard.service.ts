import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from './user.service';
import 'rxjs/add/operator/switchMap';
import { Observable } from '@firebase/util';
import { observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  uid:string;

  constructor(private auth: AuthService, private userService: UserService) { }
  
  canActivate(){
    return this.auth.appUser$
    .map(appUser => appUser.isAdmin);
  }
}
