/*
    As you have learned in previous courses, the spread operator can be used to spread arrays, but also it can be used to spread objects...

    Of this way, spreading an object, it allow us to combine the properties of different objects into a new one, plus the facility of add new properties to that new object!...
*/
const firstObject = { prop1: "" };
const secondObject = { prop2: "" };

const combinedObjects = { ...firstObject, newProp: "", ...secondObject };

console.log(firstObject);
console.log(secondObject);
console.log(combinedObjects);
