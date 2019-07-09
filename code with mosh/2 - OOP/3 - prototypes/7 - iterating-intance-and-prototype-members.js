//Instances are also known as "own properties"...

/*
    For get all the instance members of an object, we can use the Object.keys(object) metohod!
    But this method only return isntances not prototype members...

    For get all members of an object (instance and prototype) we use a for..in loop....

    The method hasOwnProperty() its very helpful, it returns true if the property is an instance and false if its a prototype member!
*/


//Create a constructor function with one instance member at least, and one prototype member....
//show its instance members and its prototype members!

function Circle(){
    this.radius = 3;

    this.coordinates = {
        x : 2,
        y : 3
    }

    this.move = () =>{
        return 'move';
    }
}

Circle.prototype.draw = function(){
    return 'draw at: ' + this.coordinates.x + ' and ' + this.coordinates.y
}


let circle1 = new Circle();

console.log("Instance Members", Object.keys(circle1));

console.log("Prototype Members");
for(let key in circle1) {
    if(!circle1.hasOwnProperty(key)) console.log(key)
}
