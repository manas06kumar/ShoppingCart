import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";
import { Coach } from "./Coach";

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

let myCoaches : Coach[] = [];
myCoaches.push(myCricketCoach);
myCoaches.push(myGolfCoach);

for(let theCoaches of myCoaches)
{
    console.log(theCoaches.getDailyWorkout());
}