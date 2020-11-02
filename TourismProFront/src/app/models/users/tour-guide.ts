import {User} from './user';
import {Car} from '../car';

export class TourGuide extends User{
  cin: String;
  licence: String;
  car: Car;

	constructor( firstName: String, lastName: String, username: String, email: String, password: String, cin: String,licence: String, car: Car) {
    super( firstName, lastName,username, email, password);
    this.cin = cin;
    this.licence = licence;
    this.car = car;
  }
}
