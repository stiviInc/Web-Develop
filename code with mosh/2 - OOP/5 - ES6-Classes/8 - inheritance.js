/*
    Inheritance in ES6 is sooo easy... we dont have to worry about the prototypical inheritance and resetting the constrcutor, all this task are done when the keyword "extends" is use...
    
    Sintax:
    class NameChildrenClass extends NameParentClass{

    }

        *** Calling the super constructor ***
    When the parent class have a constructor and is require to assign values inside it! we have to call it since the children's constructor....
    Sintax:
        super(values);
    -Each value have to be splitted by a ","

    
    //Define a parent class named Workers
    //Define one children class that inherit from Workers...

*/
const _workerID = new WeakMap();
const _hourlyPayment = new WeakMap();
const _salary = new WeakMap();
class Worker {
  constructor(workerID, name, position, hourlyPayment, totalHoursWorked) {
    _workerID.set(this, workerID);
    this.name = name;
    this.position = position;
    _hourlyPayment.set(this, hourlyPayment);
    this.totalHoursWorked = totalHoursWorked;
    _salary.set(this, this.totalHoursWorked * _hourlyPayment.get(this));
  }
  checkIn(hour) {
    return `You are starting to work at ${hour}`;
  }
  checkOut(hour) {
    return `You finished to work at ${hour}`;
  }

  //Getters and Setters
  get _workerID() {
    return _workerID.get(this);
  }
  get _salary() {
    return _salary.get(this);
  }
}

const _actualProject = new WeakMap();
class Developer extends Worker {
  constructor(
    workerID,
    name,
    position,
    hourlyPayment,
    totalHoursWorked,
    actualProject,
    team
  ) {
    //Calling the super constructor!
    super(workerID, name, position, hourlyPayment, totalHoursWorked);
    _actualProject.set(this, actualProject);
    this.team = team;
  }
  code(){
      return "I'm coding!";
  }
  //Getters and Setters
  get _actualProject(){
      return _actualProject.get(this);
  }
  set _actualProject(value){
      _actualProject.set(this,value);
  }
}


const developer1 = new Developer(1,"Stalin","Senior",20,40,"I-cook-for-you.com","kbzTeam");