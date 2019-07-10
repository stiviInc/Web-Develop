/*

    What is composition?
        It's a technique that help us to compose new objects from simple objects withou inheritance!
        This means that you can generalize those methods that would be part of the inheritance and instead of, you can create simple objects for each method!

    How to work with composition?
        JS offers us a method called .assign()
        With this method we can create a new Object wich will take all properties and methods from the others Objects defined as parameters...
    
    Can we simplify the way of work with composition?
        Of course, its very easy, you can create a function called "mixin" or "compose" or some name related.... and set 2 parameters to it....
            * Parameters:
                1.- target  ---> The object that will take properties and methods from the other objects!
                2.- the rest of objects! ---> Due to we dont know how many parameters could take this function in the future, we have to define a "rest operator" for receibe all the parameters that could be send it!

            * Function's Code:
                The function's code its really simple, its basiclly one statement:
                Object.assign(target,...sourcers);

                    Because the second parameter was store in a rest operator, in order to work with all of them, we have to send a "spread operator" to .assign() method!
        
        Due to .assign() method returns the target compose with the rest of objects, this function doesnt have to return anything!

        Importan note: If you are working with constructors, the target have to be the prototype of the constructor, not just an object!....
*/

//Define 3 objects where each one will have a method that describes an action that animal do

const canEat = {
  eat: function() {
    return "Eating";
  }
};

const canBreath = {
  breath: function() {
    return "Breathing";
  }
};

const canWalk = {
  walk: function() {
    return "Walking";
  }
};

const canSwim = {
  swim: function() {
    return "Swimming";
  }
};

function compose(target, ...soruces) {
  Object.assign(target, ...soruces); //Compose the methods in target object!
}

function Shark() {}
function Dog() {}

//Compose eat and swim methods to Shark constructor!
compose(Shark.prototype, canEat, canSwim);
//Compose eat, breath and swim methods to Dog Contructor!
compose(Dog.prototype, canBreath, canEat, canSwim);


let sharky = new Shark();
let doggy = new Dog();