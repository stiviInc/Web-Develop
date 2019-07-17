/*
    Remember: those private members starts with a "_" just for programmers convention!
*/

/*
    Another way of define private members is with WeakMap()

    This works as a kind of dictionary...(key,value)
    and offers us setter and getter methods to manipulate those variables that will be defined using it!

    https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/WeakMap

    The WeakMap Object is a collection of key/values in wich the keys are objects and values are any value!

    In order to create private properties and methods in a Class ussing WeakMap(), the first thing is to define a variable creating a new WeakMap.

    Then, inside the class, those properties that will be privates, its needly to call the set method of that WeakMap...
    The set method requires 2 parameters, the first is an object(key) and the second is the value of the WeakMap.
    But if you want to define a private method, the first parameter is also an object, and the second is a function (for a better performance, use arrow functions!)...


    * How to acces private members inside the class?
    Well, its very easy, of the same way as you set the value, you can get the value... using the get method....
    The get method takes only 1 parameter, and its an object (the object where will work as reference!)


    * Extra Note:
    When you call a private method defined with WeakMap(), at the end of the calling, you have to add "()", otherwise will return the exactly code of the function instead of the return value that is supposed to return!....

    Example:
    //Calling the _calculateSalary method and receibing the returning value!
    let salary = _calculateSalary.get(this)();  //Just an example!
*/
const _position = new WeakMap();
const _salaryPerHour = new WeakMap();
const _calculateSalary = new WeakMap();

class Worker {
  constructor(name, position, totalHours) {
    this.name = name;
    this.totalHours = totalHours;
    //Private property _position
    _position.set(this, position);
    //Private method _salaryPerHour
    _salaryPerHour.set(this, () => {
      if (_position.get(this).toLowerCase() === "developer") return 25;
      else return 15;
    });
    //Private Method _calculateSalary
    _calculateSalary.set(this, () => {
      return this.totalHours *  _salaryPerHour.get(this)();
    });
  }
  //Prototype's Function
  getSalary() {
    return _calculateSalary.get(this)();
  }
}

let stalin = new Worker("Stalin", "developer", 20);
