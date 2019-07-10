/*
    In order to can work with the properties defined in a prototype that is a superclass, we have to call it!

    How to make this call?
    Its not simple as : NameSuperConstructor(paramters)....
    We have to use the .call() method for be able to set the value of the property we want to work with!....

    Sintaxis:
    SuperConstructorName.call(objectReference,value1,value2,value3);

        Note:   The super constructor can have as many arguments as it need it, so, our task is to send all these argument when we make the call at it!
        Note2: Almost always, the first parameter in the .call() method (The ObjectReference) will be send with the keyword "this".... , if its not the case, we have to be sure that we are sending the correct reference!....

    If you want to make that the inherit object can have acces to a property defined in its prototype where it inherit, you have to use the .call() method...
    This method allows us to send the reference object where it would be add the property and value!....

    https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Function/call
    
*/

function Circle(radius){
    //Calling the super constructor
    Shape.call(this,"black");

    this.radius = radius;
    this.move = () =>{
        return "Move";
    };
}

function Shape(color){
    this.color = color;
}
//Add draw method to the prototype of Shape
Shape.prototype.draw = function(){
    return "Drawing";
}

//Prototypical Inherticance applied at Circle constructor!
Circle.prototype = Object.create(Shape.prototype);
//Resetting the constructor of Circle!
Circle.prototype.constructor = Circle;

let c = new Circle(1,"Red");

console.log(
    c
)