/*
    The polyformism means that something can take may forms, if we want to see it as code terms, the best example could be that a function can act of different ways...
    This means, that a same function can do different things depending the Object that belongs...

    Like example:
        You can have in a super constructor with a method called shoot(), and also you can have same method in different childs but with different implementaion in each one!

    In order to acomplish what the sentence above said, you should apply:
        - inheritance
        - override the methods
        - automaticlly when you do these 2 things, the polyformism starts to work!
*/

//Apply polymorsimf at shoot() method!

function inherit(Child,Parent){
    //Inherit parent's prototype to its Child
    Child.prototype = Object.create(Parent.prototype);
    //Reset Child's constructor
    Child.prototype.constructor = Child;
}

function Pistol() {}
function Shotgun() {}
function Gun() {}

//Add shoot() method to Gun's prototype!
Gun.prototype.shoot = function(){
    return "Shooting a gun";
}

//Aplying prototypical inheritance!
inherit(Pistol,Gun);
inherit(Shotgun,Gun);

//Overriding shoot() method to each Child!
Pistol.prototype.shoot = function(){
    return "Shooting a pistol!";
}
Shotgun.prototype.shoot = function(){
    return "Shooting a shotgun!";
}

//Due to overriding method, the polymorfism starts to work
//Shoot() method behave different according what object called it!

let bereta = new Pistol();
let pump = new Shotgun();
let ak47 = new Gun();

//Showing polyformism in action!s
let guns = [bereta,pump,ak47]
for(let gun of guns) console.log(gun.shoot());
