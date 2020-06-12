import { Shape } from "./Shape";

export class Rectangle extends Shape {
   
    calculateArea(): number {
       return this._width * this._length;
    }
    
    public get width(): number {
        return this._width;
    }
    public set width(value: number) {
        this._width = value;
    }
    
    public get length(): number {
        return this._length;
    }
    public set length(value: number) {
        this._length = value;
    }

    constructor(theX:number,theY:number,private _width: number,private _length: number){
       
        super(theX,theY);
    }

getInfo():string {
    return super.getInfo() + `, Rectangle width ${this._width}, Length ${this._length}`;
}

}