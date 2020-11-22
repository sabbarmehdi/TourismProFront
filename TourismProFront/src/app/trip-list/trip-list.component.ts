import { Component, OnInit } from '@angular/core';
import { TripsService } from '../services/trip-services/trips.service';
import { Router } from '@angular/router';
import { TripTouristService } from '../services/trip-services/trip-tourist.service';
import { TripTourist } from '../models/trips/trip-tourist';
import { TokenStorageService } from '../services/user-services/jwt-services/token-storage.service';


@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {

  trips: TripTourist[];
  trip: TripTourist;


  constructor(private tripService: TripTouristService,
              private triptService: TripsService,
              private router: Router,
              private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.onGetTrips();
  }
  /**
   * Determines whether get trips on
   */
  onGetTrips() {
    const clientId = this.tokenStorage.getUser().id;
    this.tripService.getTrips(clientId).subscribe(
      (trips) => {
        console.log(trips);
        this.trips = trips;
      });
  }


/**
 * Determines whether delete trip-services on
 * @param id
 */
onDeleteTrip(id: number) {
    this.triptService.deleteTrip(id).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/trips']);
        },
        error => console.log(error));
  }
    
  /**
   * Determines whether view trip-services on
   * @param id
   */
  onViewTrip(id: number){
    this.router.navigate(['/trips','view', id]);
  }
}
