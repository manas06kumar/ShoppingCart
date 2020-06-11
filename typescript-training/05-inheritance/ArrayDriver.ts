import { Circle } from "./Circle";
import { Shape } from "./Shape";
import { Rectangle } from "./Rectangle";

let myCircle = new Circle(10,20,7);
let myShape = new Shape(10,5);
let myRectangle = new Rectangle(5,10,15,20);

let theShapes:Shape[] =[];
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);


for(let tempShape of theShapes)
{
    console.log(tempShape.getInfo());
}