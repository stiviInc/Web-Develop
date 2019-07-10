/*
    For override a method that is in the super constructor you have to follow this warnings:

        1.- You only can override the method after you applied prototype inheritance and reset the constructor to the child!
        2.- The way of override the method is according to the next sintax:
            ChildName.prototype.nameMethod = function(){
                //Write the code that will override the parents method!
            }
        Imporant: The step 1 its super important, the overiding have to be made after and only after the inheritance!

        If you want to call the parents method inside the override method, you can do it with the next statement:
            ParentName.prototype.nameMethod.call(this); //this is reffering to the Child

        Explanation of how overriding works:
            Remember that JS engine search first methods and properties in the prototype object itself, if it doesnt find it will search for it at its parent's prototype...
            Because we are adding the method to the object's prototype, when we call that method, JS engine will find it at object's prototype causing the search to stop, so it wont search the method at parent's prototype...
*/

function inherit(Child,Parent){
    //Prototypical Inheritance
    Child.prototype = Object.create(Parent.prototype);
    //Reset Child's constructor
    Child.prototype.constructor = Child;
}

function Pistol(){}
function Gun(){}

//Add a method to Gun's Prototype!
Gun.prototype.shoot = function(){
    return "Shooting the gun!"
}

//Inherit to Pistol from Gun
inherit(Pistol,Gun);

//Override shoot() method for Pistol Child!
Pistol.prototype.shoot = function(){
    return "Shooting the pistol";
}

//Create a new Pistol Object
let bereta = new Pistol();

console.log(bereta.shoot());


