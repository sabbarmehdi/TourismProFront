import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TripGuide } from 'src/app/models/trips/trip-guide';

const URL = "http://localhost:8080/trip-guide/list"

@Injectable({
  providedIn: 'root'
})
export class TripGuideService {

  constructor(private http: HttpClient) { }

 /**
 * Get one trip-services
 * @param id
 * @returns one trip-services
 */
getOneTrip(id:number): Observable <any> {
    return this.http.get(`${URL}/single-trip/${id}`);
  }

 /**
  * Get trips
  * @returns trips
  */
 getTrips(): Observable<TripGuide[]> {
    return this.http.get<TripGuide[]>(`${URL}/all-trips`)
  }
}
