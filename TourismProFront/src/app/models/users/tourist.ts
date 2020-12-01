import {User} from './user';

export class Tourist extends User {

  constructor( firstName: String, lastName: String, username: String, password: String) {
    super( firstName, lastName, username, password);
  }
}
