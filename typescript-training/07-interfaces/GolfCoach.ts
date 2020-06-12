import { Coach } from "./Coach";

export class GolfCoach implements Coach{
    getDailyWorkout() : string{
       let noOfBalls: number =100;
        return `Hit ${noOfBalls} balls at ball range`;
    }
}