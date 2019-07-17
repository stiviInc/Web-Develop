/*
    Implementing setters and getters in ES6 is soooooo easy....
    We only have to add eather the word get or set depending what we want to define!

    The sintax is the following:

    1.- Out of the constructor:

    Write at the beggining of the statement the word get or set...
    After write the name of the property...
    if its a get there is no parameters, if its a set there is a parameter....

    Example:
    Define a settter and getter for the _name property... (Its an private property!)

    get name(){
        return _name.get(this);
    }

    set name(value){
        _name.set(this,value);
    }

    Of this way, we can call these functions without the calling function sintax, we can do it as if them were a property!
    obj._name = 10;
    obj._name;

    Of the same way with private methods!
*/

/*
                *** When to use setters and getters ***
    The getter and setters are commonly used when a private property needs to have either a read or write permission to the outside!....
    like example, there is a private property, but the value of this private proverty should be only accesible for reading, in this case, create a get is the solution....same applies for a private property that should only have permissions for writting, in this case a set will solve this problem!

*/

//Create an Animal Class with one private property and one private method!
const _totalPoblation = new WeakMap();
const _dangerExtinction = new WeakMap();

class Animal {
  constructor(name, age, type, sex, poblation) {
    this.name = name;
    this.age = age;
    this.type = type;
    this.sex = sex;
    //Private property with writting permisions!
    _totalPoblation.set(this, poblation);
    //Private method
    _dangerExtinction.set(this, () =>
      _totalPoblation.get(this) <= 1000 ? true : false
    );
  }
  set _totalPoblation(value) {
    _totalPoblation.set(this, value);
  }

  get _dangerExtinction() {
    return _dangerExtinction.get(this)();
  }
}

let oso = new Animal("Oso", 5, "Mamifero", "Male", 1500);

console.log(oso._dangerExtinction);

oso._totalPoblation = 200;

console.log(oso._dangerExtinction);

oso._dangerExtinction = false; //This wont work because that property doesnt have writting permitions!

console.log(oso._dangerExtinction);
