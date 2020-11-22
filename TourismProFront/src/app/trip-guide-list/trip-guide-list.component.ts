import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TripGuide } from '../models/trips/trip-guide';
import { TripGuideService } from '../services/trip-services/trip-guide.service';
import { TripsService } from '../services/trip-services/trips.service';
import { TokenStorageService } from '../services/user-services/jwt-services/token-storage.service';

@Component({
  selector: 'app-trip-guide-list',
  templateUrl: './trip-guide-list.component.html',
  styleUrls: ['./trip-guide-list.component.css']
})
export class TripGuideListComponent implements OnInit {

  trips: TripGuide[];
  trip: TripGuide;

  constructor(private tripgService: TripGuideService,
              private tripService: TripsService,
              private router: Router,
              private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
   this.onGetTripg();
  }

  onGetTripg(){
    const clientId = this.tokenStorage.getUser().id;
    this.tripgService.getTrips(clientId).subscribe(
      (trips) => {
        console.log(trips);
        this.trips = trips;
      });
  }

  onDeletTripg(id: number){
    this.tripService.deleteTripGuide(id).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/trips/guide']);
      },
      error => console.log(error));
  }

  onViewTrip(id: number) {
    this.router.navigate(['/tripg','view', id]);
  }

}
