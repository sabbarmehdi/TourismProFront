import { Component, OnInit } from '@angular/core';
import { TripGuide } from '../models/trips/trip-guide';
import { TripsService } from '../services/trip-services/trips.service';
import { Router } from '@angular/router';
import { TripTouristService } from '../services/trip-services/trip-tourist.service';
import { TripTourist } from '../models/trips/trip-tourist';


@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {

  public trips: TripTourist[];


  constructor(private tripService: TripTouristService,
              private tripgService: TripsService,
              private router: Router) { }

  ngOnInit(): void {
    this.onGetTrips();
  }
  /**
   * Determines whether get trips on
   */
  onGetTrips() {
    this.tripService.getTrips().subscribe((trips) => {
      console.log(trips);
      this.trips = trips;
    });
  }

/**
 * Determines whether view trip-services on
 * @param id
 */
onViewTrip(id: number){
    this.router.navigate(['/trips','view', id]);
  }

/**
 * Determines whether delete trip-services on
 * @param id
 */
onDeleteTrip(id: number) {
    this.tripgService.deleteTrip(id)
      .subscribe(
        data => {
          console.log(data);
          this.onGetTrips();
        },
        error => console.log(error));
  }

}
