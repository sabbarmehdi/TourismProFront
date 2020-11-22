export class Car {
    registrationNum : String;
    model: String;
    owner: String;
    seatsNum: Number;
	constructor(model: String, owner: String, seatsNum: Number, registrationNum : String) {
    this.model = model;
    this.owner = owner;
    this.seatsNum = seatsNum;
    this.registrationNum = registrationNum;
	}

}
