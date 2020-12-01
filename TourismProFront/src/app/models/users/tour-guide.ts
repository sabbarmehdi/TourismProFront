import {User} from './user';
import {Car} from '../car';

export class TourGuide extends User{
  cin: String;
  license: String;
  car: Car;

	constructor( firstName: String, lastName: String, username: String, password: String, cin: String,license: String, car: Car) {
    super( firstName, lastName,username, password);
    this.cin = cin;
    this.license = license;
    this.car = car;
  }
}
