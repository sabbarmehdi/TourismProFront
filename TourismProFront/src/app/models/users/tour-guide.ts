import {User} from './user';
import {Car} from '../car';

export class TourGuide extends User{
  cin: string;
  licence: string;
  car: Car;


  constructor(id: String, username: String, email: String, userType: String, roles: Array<string>, accessToken: String, cin: string, licence: string, car: Car) {
    super(id, username, email, userType, roles, accessToken);
    this.cin = cin;
    this.licence = licence;
    this.car = car;
  }

}
