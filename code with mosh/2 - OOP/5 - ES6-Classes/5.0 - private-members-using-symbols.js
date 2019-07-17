/*
    The way of apply abstraction in ES6 is by using Symbol() function!
    This function creates an unique identifier each time its called!

    Due to you have to use Symbol() for apply abstraction, also you will have to define those property and methods applying the "computed property names"...

    Read this file for a better understanding of how to make private properties and methods
*/

//Define the variables and methods will be privates....
const _radius = Symbol();
const _draw = Symbol();

class Circle{
    constructor(radius){
        //Applying computed property name to define the radius property private!
        this[_radius] = radius;
        //As you can see, theres no "." between the word "this" and the "[]"...is all togheter!....
    }
    //Applying computed property name to define the draw() method private!
    [_draw](){return "I'm Drawing";}
}

let c = new Circle(1);

/*
        *** Description of what happened in the code above ***
    When you create a variable calling the Symbol() function, this returns explicity Symbol()... JS internally know to what this Symbol() reffers!

    Also when you check a variable that was defined using Symbol(), you get same value ---> Symbol()....

    Of this way, if you defined a property or a method applying Symbol() and computed property name, when you want to use them, you wont can do it, because them are stored as Symbol() and not as the name of the variable itself!
*/