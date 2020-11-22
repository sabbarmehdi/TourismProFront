import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TripGuide } from '../models/trips/trip-guide';
import { TripGuideService } from '../services/trip-services/trip-guide.service';
import { TripsService } from '../services/trip-services/trips.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  trips: TripGuide[];

  constructor(private tripgService: TripGuideService,
              private tripService: TripsService,
              private router: Router) { }

  ngOnInit(): void {
   this.onGetTripg();
  }

  onGetTripg(){
    this.tripgService.getAllTrips().subscribe((trips) =>{
      console.log(trips);
      this.trips = trips;
    });
  }

  onDeletTripg(id: number){
    this.tripService.deleteTripGuide(id).subscribe(
      data => {
        console.log(data);
        this.onGetTripg();
      },
      error => console.log(error));

  }
  onViewTrip(id: number) {
    this.router.navigate(['/tripg','view', id]);
  }


}
