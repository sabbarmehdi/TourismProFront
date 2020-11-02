import { HttpClient, HttpHeaders} from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Tourist } from 'src/app/models/users/tourist';
import { User } from '../../models/users/user';

const AUTH_USER = 'http://localhost:8080/api/auth/';
const GUIDE_API = 'http://localhost:8080/api/auth/guide/';
const TOURIST_API = 'http://localhost:8080/api/auth/';
const ADMIN_API = 'http://localhost:8080/api/auth/admin/';

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  @Output() getLoggedInUser: EventEmitter<User> = new EventEmitter;

  constructor( private http: HttpClient ) { }

  login(credentials, api:string): Observable<User>{
    return this.http.post<User>(api + 'signin', {
      email: credentials.email,
      password: credentials.password
    }, httpOptions );
  }

  registerTourist(user: Tourist): Observable<any>{
    console.log("service: " + user );
    return this.http.post(TOURIST_API + 'signup', {
      email: user.email,
      username: user.username,
      lastName: user.lastName,
      firstName: user.firstName,
      password: user.password
    }, httpOptions);
  }

  registerGuide(user): Observable<any>{
    console.log("service: " + user );
    return this.http.post(GUIDE_API + 'signup', {
      email: user.email,
      password: user.password,
      username: user.username,
      lastname: user.lastname,
      firstname: user.firstname,
      cin: user.cin,
      licence: user.licence,
      car:{
        owner: user.car.owner,
        model: user.car.model,
        seatsNum: user.car.seatsNum
      }
      
    }, httpOptions);
  }

  registerAdmin(user): Observable<any>{
    console.log("service: " + user );
    
    return this.http.post(ADMIN_API + 'signup', {
      email: user.email,
      password: user.password,
      username: user.username,
      lastname: user.lastname,
      firstname: user.firstname,
      status: user.status
    }, httpOptions);
  }

  guideLogin(credentials): Observable<any> {
    return this.login(credentials, GUIDE_API);
  }

  touristLogin(credentials): Observable<any> {
    return this.login(credentials, TOURIST_API);
  }
  adminLogin(credentials): Observable<any> {
    return this.login(credentials, ADMIN_API);
  }

  getCurrentUser():Observable<User>{
    return this.http.get<User>(AUTH_USER);
  }
}
