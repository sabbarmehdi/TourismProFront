import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tourist } from 'src/app/models/users/tourist';

const URL = "http://localhost:8080/api/user/";
@Injectable({
  providedIn: 'root'
})
export class TouristService {

  constructor(private http: HttpClient) { }

  getTouristById(id: String): Observable<Tourist>{
    return this.http.get<Tourist>(URL + id)
  }
}
