import {User} from './user';

export class Admin extends User{
  status: Boolean = false;


  constructor(id: String, username: String, email: String, userType: String, roles: Array<string>, accessToken: String, status: Boolean) {
    super(id, username, email, userType, roles, accessToken);
    this.status = status;
  }
}
