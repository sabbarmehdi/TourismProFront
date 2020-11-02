export class User {
    id: String;
    firstName: String;
    lastName: String;
    username: String;
    email: String;
    password: String;
    roles: Array<string>;
    accessToken: String;

	constructor(firstName: String, lastName: String, username: String, email: String, password: String) {
        
            this.firstName = firstName;
            this.lastName = lastName;
            this.username = username;
            this.email = email;
            this.password = password;
          
	};
}
