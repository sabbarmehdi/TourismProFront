import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../jwt-services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class GuideAuthGuard implements CanActivate {

  constructor(private router: Router, private authStorage: TokenStorageService){}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if((this.authStorage.getUser() == null) ||
      (this.authStorage.getUserType() !== "GUIDE")){
        this.router.navigate(["/guide/login"], { queryParams: { retUrl: state.url } });
        return false;
      }
    return true;
  }

}
