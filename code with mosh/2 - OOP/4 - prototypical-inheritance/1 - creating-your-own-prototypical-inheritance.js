/*
    Due to in JS there is no inheritance just as is....there is a little trick to simulate inheritance,this trick is called prototypical inheritance, and consist in create a constructor function which its prototype it'll be the equivalent to the superclass(father).
    Once you've created the constructor and add to its prototype the methods and properties that will inherit, you have to change the prototype of the constructor that you want to inherit from the superclass (father) you've created...
    This is done as follows:

    ConstructorChildren.prototype = Object.create(ConstructorFather.prototype);

    Think the next scenario:

    You have 2 contructor functions, one is for create dogs and the other for cats, both constructor have equal methods, you can create a prototype called animals and put in it the methods that are repeating in the 2 constructors, of this way you are creating a prototype called animals that will inherit to cats and dogs....

    See the following example...

*/

function Dog(name, age, sex) {
  //Calling the super constructor
  Animal.call(this, name, age, sex);

  this.bark = () => {
    console.log("guaf guaf");
  };
}

function Cat(name, age, sex) {
  //Calling the super constructor
  Animal.call(this, name, age, sex);

  this.meow = () => {
    console.log("miau miau");
  };
}

//Constructor that its prototype will be the superclass!
function Animal(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
//Add methods that Animal prototype will inhterit
Animal.prototype.walk = function() {
  console.log("Walking");
};

Animal.prototype.eat = function() {
  console.log("Eating");
};

//By default, the prototype's constructors are assigned with the next statement under the hood...
//Dog.prototype = Object.create(Object.prototype) //This is how the prototype of a constructor is assigned by default, thats why always a new contuctor that hasnt't changed its prototype assigned by default works with the Objec's Prototype...

//Change the prototype to Dog Constructor!  ---> Make it inherit from the Animal's Prototype
Cat.prototype = Object.create(Animal.prototype); //Its prototype is Animal
Cat.prototype.constructor = Cat; //Resetting the constructor function

Dog.prototype = Object.create(Animal.prototype); //Its prototype is Animal
Dog.prototype.constructor = Dog; //Resetting the constructor function

let gato = new Cat("wero", 4, "machote");
let perro = new Dog("perrazo", 3, "hembra");

let animal = new Animal();

console.log(Dog.prototype);

console.log(Cat.prototype);

console.log(Animal.prototype);
