/*
    The this keyword always return the reference to an object!

    the reference that will be returned depend how the function is called....

    if the function is called as a method in an object, "this" always will return a reference to that object!

    if the function is called as a stand alone object or outside of a object, "this" will return a reference to the global object (Window in Browsers!)


    The react apps run with strict mode activated!
*/

const person = {
  name: "stalin",
  walk() {
    console.log(this);
  },
  talk() {}
};

//This will get a reference to the function, not to the object itself!
let walk = person.walk;
console.log(walk);
walk(); //This will get a reference to the window object!   ---> Undefined

//This will get a reference to the object itself!
walk = person.walk();
console.log(walk);

// walk(); //This will trhow an error!
