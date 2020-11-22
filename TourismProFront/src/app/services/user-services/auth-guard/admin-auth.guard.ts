import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { TokenStorageService } from '../jwt-services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private router: Router, private authStorage: TokenStorageService,
    private authService: AuthService){}
canActivate(
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): boolean {
    if(this.authStorage.getUserType() == "ADMIN" || this.authService.isLoggedIn()){
      return true;
    }else{
      this.goLogin();
      return false;
    }
  }
  goLogin(){
  this.router.navigate(["admin/login"]);
  }
}