import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(10,15);
console.log(myShape.getInfo());

let myCircle = new Circle(20,30,7);
console.log(myCircle.getInfo());

let myRectangle = new Rectangle(10,20,30,40);
console.log(myRectangle.getInfo());