import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TripTourist } from 'src/app/models/trips/trip-tourist';
import { TripTouristService } from 'src/app/services/trip-services/trip-tourist.service';


@Component({
  selector: 'app-single-trip',
  templateUrl: './single-trip.component.html',
  styleUrls: ['./single-trip.component.css']
})
export class SingleTripComponent implements OnInit {

  id: number;
  trip: TripTourist;

  constructor(private tripService: TripTouristService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.trip = new TripTourist();

    this.id = this.route.snapshot.params['id'];

    this.tripService.getSingleTrip(this.id).subscribe(
      tripData => {
        console.log(tripData);
        this.trip = tripData;
      },
      error => console.log(error)

    );

  }
/*
  getSingleTrip(id: number){
    this.tripService.getSingleTrip(+id).subscribe(
      (trip-services: TripTourist) => {
        console.log(trip-services);
        this.trip-services = trip-services;
      },
      error => console.log(error)

    );} */

}
