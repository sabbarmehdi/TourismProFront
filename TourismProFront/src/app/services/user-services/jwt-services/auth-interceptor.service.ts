import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStorageService } from './token-storage.service';

const TOKEN_HEADR_KEY = 'Authorization';
const USER_TYPE_HEADEXR_KEY = 'User-Type';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private token: TokenStorageService) { }

  intercept(req: HttpRequest<any> , next: HttpHandler){
    let authReq = req;
    const token = this.token.getToken();
    const userType = this.token.getUserType();
    let headers = req.headers;
   
    if(token != null){
      headers = headers.set(TOKEN_HEADR_KEY, 'Bearer' + token);
    }

    if (userType != null){
      headers = headers.set(USER_TYPE_HEADEXR_KEY, userType);
    }
    
    authReq = req.clone({headers: headers});
   
    return next.handle(authReq);
  }
}
