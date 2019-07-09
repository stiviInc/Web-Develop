/*
    Define a constructor function for create Person Objects, define at least 1 instance member and 1 prototype member...
    Make the needly test to prove the code its working!

*/

function Person(name){
    //Instance Members
    this.name = name;

    //Getters and Setters
    Object.defineProperty(this,'name',{
        get : function(){
            return name;
        },
        set : function(value){
            name = value;
        }
    });
    
    this.think = () =>{
        return 'Im thinking';
    }
}

//Prototype Members
Person.prototype.walk = function(){
    return "I'm walking";
};
Person.prototype.simultaniousTask = function(){
    let str = this.think();
    str += ' and ' + this.walk();
    return str;
}


let me = new Person("Stalin");
let broda = new Person("Chobe");
let nene =  new Person("Kbz");

me.name = "XD";

//console.log(me.name)

//Just remember:::

me.__proto__ === Person.prototype   // ---> true!