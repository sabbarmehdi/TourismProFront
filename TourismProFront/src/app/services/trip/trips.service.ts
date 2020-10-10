import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TripGuide } from '../models/trip-guide';


const URL = "http://localhost:8080/trip/"

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  constructor(private http: HttpClient ) { 
  }
  
  //TODO: Create this methode in Back-end!

  /**
   * Gets single trip
   * @param id 
   * @returns single trip 
   */
  getSingleTrip(id:number): Observable<Object> {
    return this.http.get(`${URL}`+ 'manager/single-trip/${id}')
  }
/**
 * Gets trips
 * @returns trips 
 */
getTrips() :Observable<TripGuide[]> {
    
    return this.http.get<TripGuide[]>(`${URL}list/all-trips`);
  }
/**
 * Create new trip
 * @param trip 
 */
  createTrip(trip: object): Observable<object>{
    return this.http.post(`${URL}`+ 'manager/new-trip', trip);
  }
  /**
   * Updates trip
   * @param id 
   * @param value 
   * @returns trip 
   */
  updateTrip(id:number, value:any): Observable<Object> {
    return this.http.post(`${URL}`+ 'manager/update-trip/${id}',value);
  }
/**
 * delete trip 
 * @param id 
 */
  deletTrip(id: number): Observable<any> {
    return this.http.delete(`${URL}`+ 'manager/delete-trip/${id}', {responseType: 'text'});
  }
}
