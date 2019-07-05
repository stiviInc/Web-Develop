/*
    "this" references the object that is executing the current function....

    When you are working with a:        -> references to a:
        - method                        -> object
        - function                      -> global(browser : windows, node : global)

    This means: When you use this inside a method, you will get the reference to the objects where this is being used,
    but when you are working with a function and you use this, you will get reference globally...

    There is a tricky bug when you are working with a method but inside that method you make a callback function, this callback function references to a global scope, so, if you use this keyword, you will get a reference to the window or global.... some callback function allows to send an object as a pararemter, of this way when you use this inside the callback function, you will get the reference to the object that were send as a parameter......
        
    ***---***---*** Solve this problem with arrow functions!...***...***...***
    this only happens if you define the function as a function itself, but if you use the arrows functions you are not gonna have this problem, arrows functions references to the object not globally!
    The reason of why arrow functions references to the object its because arrow functions inheritance directly the containing function, so, if the containing function in this case is a method, and the method references to an object, automaticly, the arrow function refers to the same object!
*/

/*
        - How the "new" keyword works

    When you use the "new" keyword for call a constructor function, JS engine internally creates a new empty object "{ }", thats why when you use "this" inside that function returns a reference as if it would be an object!
*/


//Example of this in a method!
let keybord = {
    keys : ['a','b','c','d','e','f','g','g'],
    shortcuts : {
        'a' : 'control',
        'b' : 'shift',
        'c' : 'tab'
    },
    numPad : [1,2,3,4,5,6,7,8,9,0],
    spetialKeys : ['/','*','+','-','=','.'],
    get allShortcuts(){
        return this.shortcuts;
    },
    get totalSpetialKeys(){
        return this.spetialKeys.map(key => this.shortcuts);     //Using arrows functions avoid the tricky bug mentioned above, arrows functions references to the object!
    }
}

console.log(keybord.totalSpetialKeys);  //it'll show a object reference


function Person(name,age){
    this.name = name;
    this.age = age;

    console.log(this);
}

Person();                               //it'll show a global reference

let stalin = new Person("stalin",22);
stalin;                                 //it'll show a obect reference because the "new" keyword... remember: the "new" keyword creates an empty object {}