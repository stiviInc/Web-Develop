/*
    Example of how to define descriptors on an object!
    
*/


let person = {name : 'Stalin'}

Object.defineProperty(person,'name',{
    writable : true,    //This key allow/block the overwritting of the property!
    configurable : false,   //This key allow/deny the deleting of the property!
    enumerable : true  //This key hide the property from the enumeration of properties...
});

delete person.name

console.log(
    person
)