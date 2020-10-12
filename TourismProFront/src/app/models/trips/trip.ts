import { Trajectory } from './trajectory';

export abstract class Trip {
    id: number;
    tripName: String;
    description: String;
    trajectory: Trajectory;

    /* constructor(tripName: String, description: String, trajectory: Trajectory){
        this.tripName = tripName;
        this.description = description;
        this.trajectory = trajectory;
    } */
}
