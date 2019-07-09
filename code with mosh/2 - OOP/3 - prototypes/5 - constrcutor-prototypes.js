/*
    The prototype of an Object created by a constructor is the constructor itself!...

    if you want to check the parent of an Object, you can make of the next way:
    nameObject.__proto__

    if you want to check the prototype of a constructor function, you can make of the next way:
    Constructor.prototype

    Both ways return same result.... but in the first one it reffers to its parent, and in the second one it reffers to the prototype of the constructor function!
*/


function Car(model){
    this.model = model;
}

let sentra = new Car("Sentra");

console.log(
    sentra.__proto__
)

console.log(
    Car.prototype
)

let array = [];

console.log(
    array.__proto__
)

console.log(
    Array.prototype
)