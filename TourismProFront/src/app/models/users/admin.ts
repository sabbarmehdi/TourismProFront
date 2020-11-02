import {User} from './user';

export class Admin extends User{
  status: Boolean = false;


  constructor( firstName: String, lastName: String, username: String, email: String, password: String, status: boolean) {
    super( firstName, lastName,username, email, password);
    this.status = status;
  }
}
