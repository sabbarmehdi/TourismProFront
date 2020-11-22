import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { TokenStorageService } from '../jwt-services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TouristAuthGuard implements CanActivate {

  constructor(private router: Router, private authStorage: TokenStorageService,
              private authService: AuthService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(this.authStorage.getUserType() == "TOURIST" || this.authService.isLoggedIn()){
            return true;
          }else{
            this.goLogin();
            return false;
          }
  }
  goLogin(){
    this.router.navigate(["user/login"]);
  }
}
