import { User } from '../users/user';
import { Trajectory } from './trajectory';
import { Trip } from './trip';

export class TripGuide extends Trip{
    price: number;
    tripeDate: Date;
  /*   constructor(tripName: String, description: String, trajectory: Trajectory, price: number, tripeDate: Date){
        super(tripName, description, trajectory);
        this.price = price;
        this.tripeDate = tripeDate;
    } */
}