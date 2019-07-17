/*
    In JS Classes exists 2 types of methods:
        - Instance Methods
        - Static Methods

    The Instance Methods are those that once you create an instance of a class are available on it!

    The Static Methods are available on the class itself, this means it is doesnt need to create an object of that class for be able to use static methods....
    Static Methods are commonly use to create utility functions that are not attached to an specific object!
    Working with these objects means that you will work with the class itself not with a specific objec...

        Sintax:
    1.- The method have to be defined out of the constructor
    2.- method starts with "static" keyword!
    
    class NameClass {

        constructor(parameters){}
        
        //Static Methods

        static nameFunction(parameters){
            //Code
        }
        
    }
        
*/

class FileUtilities {
  //Static Method
  static readFile(path) {
    return `Reading file at ${path} location`;
  }
}

class Person {
  constructor(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    //Object's Method
    this.infoPerson = () => `My name is ${this.name} and I'm ${this.age} old`;
  }

  //Prototype's Method
  walk() {
    return `I'm Walking`;
  }

  //Static Method
  static parse(str) {
    return new Person(
      JSON.parse(str).name,
      JSON.parse(str).age,
      JSON.parse(str).sex
    );
  }
}
