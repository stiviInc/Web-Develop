/*
    Define a getter or a setter in a object where abstraction is being applied helps a lot to work with those variables that are not accesible from the outside, especially the getter its very helpfull....

    Think the next scenario: You have defined a local variable in a object that cant be accesible from the outside, but you need to display that value, so, you can create a getter to only read the value's variable...

    How to define a getter o a setter in a object where abstraction is being applied?
        -You have to use the method defineProperty() of the Object parent!.....

    Sintax:
    Object.defineProperty(parameter1, parameter2, parameter3);

        - Parameter's description:
    Parameter1: Its the object where the property will be define
    Parameter2: Its the name of the property, it has to be write inside a ''
    Parameter3: Its an object where the set and get will be define!, as this parameter its an object, its values have to use the object notation (key : value)

    Example:

    Object.defineProperty(this, 'location',{
        get : function(){
            return location;
        },
        set : function(value){
            if(!value) throw new Error('Invalid value');
            location = value;
        }
    });

        Description: The benefit of declare a setter is that you can validate the values and throw exceptions when values are not valid!
    
        Note: When you define a set or get, they wont be shown as if it would be accesible from the outside, but despite it, you can use them...
        I mean, if you write objName.properties... the sets and gets wont be shown as a property of the object....
*/

function Laptop(mark, model, price) {
  //Local Variables
  let cpu = "i7";
  let gpu = "gtx970";
  let lattency = 1050;
  //Local Functions
  let overcloackCPU = percentage => {
    return (lattency *= percentage);
  };

  this.mark = mark;
  this.model = model;
  this.price = price;

  this.increasePerformance = percentage => {
    return overcloackCPU(percentage);
  };

  //Define a get for cpu and a set and get for gpu
  Object.defineProperty(this, "cpu", {
    get: function() {
      return cpu;
    }
  });
  Object.defineProperty(this, "gpu", {
    get: function() {
      return gpu;
    },
    set: function(value) {
      if (typeof value !== "string")
        throw new Error("Please, type gpu's name!");
      gpu = value;
    }
  });
}

const stalinLaptop = new Laptop("Leonovo", "LN1090", 9500);

try {
  stalinLaptop.gpu = "gtx1090";
} catch (e) {
  console.log(e.message);
}

console.log(stalinLaptop.gpu);

console.log(`new latency: ${stalinLaptop.increasePerformance(50)}`)
