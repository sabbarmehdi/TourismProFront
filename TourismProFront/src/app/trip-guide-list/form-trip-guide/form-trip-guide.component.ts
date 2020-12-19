import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TripGuide } from 'src/app/models/trips/trip-guide';
import { TripsService } from 'src/app/services/trip-services/trips.service';
import { TokenStorageService } from 'src/app/services/user-services/jwt-services/token-storage.service';

@Component({
  selector: 'app-form-trip-guide',
  templateUrl: './form-trip-guide.component.html',
  styleUrls: ['./form-trip-guide.component.css']
})
export class FormTripGuideComponent implements OnInit {


  trip: TripGuide ={
    id: null,
    tripName: '',
    description: '',
    trajectory: {
      id: null,
      distance: '',
      trajectoryTime: new Date()
    },
    tripPeriod: null,
    startingCity: '',
    clientId: null,
    price: null,
    tripeDate: new Date()
  }

  constructor(private tripService: TripsService,
              private router: Router,
              private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.trip.clientId =  this.tokenStorage.getUser().id;
        //console.log("trip-form test: " + JSON.stringify(th));
  }

  onSaveTripg() {
    this.tripService.createTripGuide(this.trip).subscribe(
      data => {
        console.log(data);
        this.trip = new TripGuide();
        this.backToList();
      },
      error => console.log(error));
  }
  //TODO: impliment this method to save trip as Draft
  onSaveDraft(){}

  backToList() {
    this.router.navigate(['/trips','guide'])
  }
}
