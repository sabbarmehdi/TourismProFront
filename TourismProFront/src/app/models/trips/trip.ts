import { User } from '../users/user';
import { Trajectory } from './trajectory';

export abstract class Trip {
    id: number;
    tripName: String;
    description: String;
    trajectory: Trajectory;
    clientId: String;

    /* constructor(tripName: String, description: String, trajectory: Trajectory){
        this.tripName = tripName;
        this.description = description;
        this.trajectory = trajectory;
    } */
}
