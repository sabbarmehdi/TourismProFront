import { Injectable } from '@angular/core';
import { User } from '../../../models/users/user';

const TOKEN_KRY ='auth-token';
const USER_KEY = 'auth-user';
const USER_TYPE = 'user-type';

@Injectable({
  providedIn: 'root'
})
export class  TokenStorageService {

  constructor() {}

  signOut(){
    localStorage.clear();
    localStorage.removeItem(TOKEN_KRY);
    localStorage.removeItem(USER_KEY);
  }

  public saveToken(token: string): void {
    localStorage.removeItem(TOKEN_KRY);
    localStorage.setItem(TOKEN_KRY, token);
  }

  public getToken(): string {
    return localStorage.getItem(TOKEN_KRY);
  }

  public saveUserType(userType: string){
    localStorage.removeItem(TOKEN_KRY);
    localStorage.setItem(TOKEN_KRY, userType);
  }

  public getUserType(): string{
    return localStorage.getItem(USER_TYPE);
  }

  public saveUser(user: User): void {
    localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): User{
    return JSON.parse(localStorage.getItem(USER_KEY));
  }
}
