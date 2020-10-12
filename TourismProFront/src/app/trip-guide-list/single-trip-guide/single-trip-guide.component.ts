import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TripGuide } from 'src/app/models/trips/trip-guide';
import { TripGuideService } from 'src/app/services/trip-services/trip-guide.service';

@Component({
  selector: 'app-single-trip-guide',
  templateUrl: './single-trip-guide.component.html',
  styleUrls: ['./single-trip-guide.component.css']
})
export class SingleTripGuideComponent implements OnInit {

  id: number;
  trip: TripGuide;

  constructor(private tripgService: TripGuideService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.trip = new TripGuide();
    this.id = this.route.snapshot.params['id'];

    this.tripgService.getOneTrip(this.id).subscribe(
      tripData => {
        console.log(tripData);
        this.trip = tripData;
      },
      error => console.log(error));
  }

}
