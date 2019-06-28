/*
    Write a JS program to find an object from an array...
*/

function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}

const persons = [
  new Person("stalin", 22, "m"),
  new Person("osiris", 20, "m"),
  new Person("chely", 48, "f")
];

function findPersonByName(personsArray, name) {
  return personsArray.find(person => person.name === name);
}

function findIndexOfPersonByName(personsArray, name) {
  return personsArray.findIndex(person => person.name === name);
}

console.log(findPersonByName(persons, "osiris"));

console.log(findIndexOfPersonByName(persons, "osiris"));
