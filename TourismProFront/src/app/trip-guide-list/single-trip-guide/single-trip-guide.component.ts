import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TripGuide } from 'src/app/models/trips/trip-guide';
import { TripGuideService } from 'src/app/services/trip-services/trip-guide.service';
import { TripsService } from 'src/app/services/trip-services/trips.service';

@Component({
  selector: 'app-single-trip-guide',
  templateUrl: './single-trip-guide.component.html',
  styleUrls: ['./single-trip-guide.component.css']
})
export class SingleTripGuideComponent implements OnInit {

  id: number;
  trip: TripGuide;

  constructor(private tripgService: TripGuideService,
              private tripService: TripsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.trip = new TripGuide();
    this.id = this.trip.id;

    this.tripgService.getOneTrip(this.id).subscribe(
      tripData => {
        console.log(tripData);
        this.trip = tripData;
      },
      error => console.log(error));
  }

  onDeletTripg(id: number){
    this.tripService.deleteTripGuide(id).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/trips/guide']);
      },
      error => console.log(error));
  }
}
