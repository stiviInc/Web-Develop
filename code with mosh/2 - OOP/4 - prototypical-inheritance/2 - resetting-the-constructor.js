/*
    When the prototype of a constructor its change, automaticlly its constructor change it for the constructor of the new prototype....
    Because of this, its a good practice to reset the constructor each time the prototype is changed, and its make of the next way:

    //Resetting the constructor of a Constructor Function!
    ConstructorFunctionName.prototype.constructor = ConstructorFunctionName;
*/

function Circle(radius){
    this.radius = radius;
    this.move = () =>{
        console.log("Move");
    };
    Shape.call(this,"black");       //Calling the superconstructor
}

//Super Constrcutor!
function Shape(color){
    this.color = color;
}
Shape.prototype.draw = function(){
    console.log(color);
}

//Prototypical Inherticance applied at Circle constructor!
Circle.prototype = Object.create(Shape.prototype);
//Resetting the constructor of Circle!
Circle.prototype.constructor = Circle;
let c = new Circle(1,"Black");

console.log(
    c.constructor
);