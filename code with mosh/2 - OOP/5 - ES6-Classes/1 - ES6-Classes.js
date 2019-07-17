/*
    Classes in JS are just syntactically, it makes cleaner code creating constructors functions!

    Importants aspects:
        - if the class will receibe parameters, them are defined in the constructor.... (keep reading!)
        
        * About Functions:

    -Object's Functions:
    The functions that are defined inside the constructor will be local functions, in other words, them will be part of the object not the prototype!... its definition have to be like this:   
        this.nameFunction = function(parameters){
            //Dode
        }

    -Prototype's Functions:
    Functions that are defind out of the constructor will be placed in the object's prototype!... its definition have to be like this:
        nameFunction(parameters){
            //Code
        }
    
    -Create an Instance:
    For create an instance of a class you have to use the new Operator:
    let nameInstance = new nameClass(parameters);


        --- Class Sintax ---
    class NameClass{
        constructor(parameters){
            this.vars = vars;
            this.functions = function(parameters){
                //Object's functions code!
            }
        }

        prototypeFunctions(parameters){
            //Protoype's functions code!
        }
    }
*/

class Person{
    constructor(name,age,sex){
        this.name = name;
        this.age = age;
        this.sex = sex;
        //Object's Function
        this.showInfo = () => `My name is: ${name} , I'm ${age} years old\n`;
    }
    //Prototype's Function
    walk(){
        return "I'm walking\n";
    }
}


const me = new Person("Stalin",22,"Macho");

console.log(
    me.walk()
)