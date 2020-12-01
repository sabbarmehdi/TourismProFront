import {User} from './user';

export class Admin extends User{
  status: Boolean = false;


  constructor( firstName: String, lastName: String, username: String, password: String, status: boolean) {
    super( firstName, lastName, username, password);
    this.status = status;
  }
}
