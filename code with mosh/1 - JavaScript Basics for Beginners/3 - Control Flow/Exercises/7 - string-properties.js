/*
    Write a function that receive an object as a input and returns all the String properties with its values...
*/

function stringProperties(obj) {
    for(let prop in obj) if(typeof obj[prop] === 'string') console.log(`${prop} : ${obj[prop]}`);
}

const cat = {
  name: "Gato",
  eyesColor: "Blue",
  age: 5,
  sex: "Male",
  numLegs: 4
};

stringProperties(cat);
