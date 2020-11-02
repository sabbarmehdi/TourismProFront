import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TripTourist } from 'src/app/models/trips/trip-tourist';

const URL = "http://localhost:8080/trip/list";

@Injectable({
  providedIn: 'root'
})
export class TripTouristService {

  constructor(private http: HttpClient) { }

   /**
   * Gets single trip-services
   * @param id
   * @returns single trip-services
   */
  getSingleTrip(id:number): Observable <any> {
    return this.http.get(`${URL}/single-trip/${id}`);
  }
/**
 * Gets trips
 * @returns trips
 */
  getTrips() :Observable<TripTourist[]> {

    return this.http.get<TripTourist[]>(`${URL}/all-trips`);
  }
}
