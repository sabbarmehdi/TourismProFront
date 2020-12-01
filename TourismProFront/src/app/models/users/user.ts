export class User {
    id: String;
    firstName: String;
    lastName: String;
    username: String;
    password: String;
    userType: string;
    roles: Array<string>;
    accessToken: string;

    constructor(firstName: String, lastName: String, username: String, password: String/* ,
        userType: string,
        roles: Array<string>,
        accessToken: string */) {

            this.firstName = firstName;
            this.lastName = lastName;
            this.username = username;
            this.password = password;
           /*  this.userType = userType;
            this.roles = roles;
            this.accessToken = accessToken; */
    };
}
