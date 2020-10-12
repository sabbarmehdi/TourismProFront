export class User {
    id: String;
    username: String;
    email: String;
    userType: String;
    roles: Array<string>;
    accessToken: String;

	constructor(id: String, username: String, email: String, userType: String, roles: Array<string>, accessToken: String) {
            this.id= id;
            this.username= username;
            this.email = email;
            this.userType = userType;
            this.roles = roles;
            this.accessToken = accessToken;
	};

}
