import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TripTourist } from 'src/app/models/trips/trip-tourist';
import { TripGuide } from '../../models/trips/trip-guide';


const URL = 'http://localhost:8080/trip/';
const guideURL = 'http://localhost:8080/trip-guide/'

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  constructor(private http: HttpClient ) {
  }


/**
 * Create new trip-services
 * @param trip
 */

  createTrip(trip: TripTourist): Observable<TripTourist> {
    return this.http.post<TripTourist>(`${URL}` + 'new-trip-services', trip);
  }

  /**
   * @param id
   * @param value
   */
  updateTrip(id: number, value: any): Observable<Object> {
    return this.http.post(`${URL}` + 'update-trip-services/${id}', value);
  }
/**
 * delete trip-services
 * @param id
 */
  deleteTrip(id: number){
    return this.http.delete(`${URL}` + 'delete-trip-services/${id}', {responseType: 'text'});
  }

//---------------------------------Trip Guide methods-------------------------------
  /**
   * Create trip-services guide
   * @param trip
   * @returns trip guide
   */
  createTripGuide(trip: TripGuide): Observable<TripGuide> {
    return this.http.post<TripGuide>(`${guideURL}` + 'new-trip-services', trip);
  }

  /**
   * Update trip-services guide
   * @param id
   * @param value
   * @returns trip guide
   */
  updateTripGuide(id: number, value: any): Observable<Object> {
    return this.http.post(`${guideURL}` + 'update-trip-services/${id}', value);
  }

  /**
   * Deletes trip-services guide
   * @param id
   * @returns trip guide
   */
  deleteTripGuide(id: number): Observable<any> {
    return this.http.delete(`${guideURL}delete-trip/${id}`, {responseType: 'text'});
  }
}
