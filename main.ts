// ************ Type Annotations ************

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[]=[1,2,3];
let f: any[]=[1,true,'a',false]

// *********** ENUM ***********
const ColorRed = 0;
const ColorBlue = 1;
const ColorGreen = 2;

enum color {Red = 0,Green = 1,Blue = 2};
let backgroundColor = Color.Red;

// *********** TYPE ASSERTIONS ***********

// message is type 'any'
let message;
// may throw error 
let message = 'abc';
assert type <string> onto message
let endswithc = (<string>message).endsWith('c');
let endswithc = (message as string).endsWith('c');

// ************** Interfaces ***********
interface Point{
    x:number,
    y:number
}

let drawpoint = (point:Point) =>{
    // stuff
}
drawpoint({
    x:1,
    y:2
})

// ************** Objects and Cohesion ***********

interface Point{
    x:number,
    y:number
}

let drawpoint = (point:Point) =>{
    // stuff
}
// we may use the point object again
let getDistance = (pointA: Point, pointB:Point)=>{

}
drawpoint({
    x:1,
    y:2
})