/*
    The fact of copy+paste and modify the statement for make prototypical inheritance and for reset the constructor could be a little noisy, and if we are working with a lot of Constructors, we could make errors!....

    Instead of copy+paste and modify, a better practice is to create a function that do this task for us, and when we need it to make prototypical inheritance and reset the constructor we only call this function with its respective values!....

    See the code and read the notes in each statement for understand it better!
*/

function Pistol(name,caliber,price,automaticly,numberOfShots){
    //Calling the super constructor and sending the parameters that it requires!
    Gun.call(this,name,caliber,price,automaticly);
    this.numberOfShots = numberOfShots;

    this.pullOut = () =>{
        return "Pulling out pistol from belt";
    }
}

function Gun(name,caliber,price,automaticly){
    this.name = name;
    this.caliber = caliber;
    this.price = price;
    this.automaticly = automaticly; //true or false!
}

//Add methods to Gun's Prototype
Gun.prototype.shoot = function(){
    return `Shooting bullets of ${this.caliber} caliber`;
}
Gun.prototype.reload = function(){
    return this.automaticly === true ? "This gun doesnt need to reload" : "Reloading";
}

/*
//Applying prototype inheritance to Pistol constructor
Pistol.prototype = Object.create(Gun.prototype);
//Reseting the constructor
Pistol.prototype.constructor = Pistol;
*/

//The code commented above can be refactor by the next function!
function inherit(Child,Parent){
    //Applying prototype inheritance...
    Child.prototype = Object.create(Parent.prototype);
    //Resetting child's constructor!
    Child.prototype.constructor = Child;
}

//Calling inherit() function to make Pistol inherit from Gun
inherit(Pistol,Gun);

//Create a pistol object!
let beretaM9 = new Pistol("Bereta M9","9mm","$548 usd",true,20)
console.log(
    beretaM9
)