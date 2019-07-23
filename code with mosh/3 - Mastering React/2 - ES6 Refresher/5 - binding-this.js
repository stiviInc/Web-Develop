/*
    In order to solve the problem of get a reference to a global object when a function is called without the object.... we can add the bind property to the object where the function is being called and send as a parameter the object we want to get the reference!
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

//Binding this...

//This will get a reference to the function, not to the object itself!
//In order to get the reference to the object, we add the bind property and send as a parameter the object itself!
walk = person.walk.bind(person);
walk(); //Once we add the bind property, this will get the reference to the object!
