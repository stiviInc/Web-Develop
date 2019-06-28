function Circle(radius){
    this.radius = radius;
    this.draw = () =>{
        console.log("Drawing");
    }
}

const circle1 = new Circle(3);

for(let key in circle1) {
    console.log(key,":",circle1[key]);
}

console.log(checkIfThisProperyExist("radius",circle1));
console.log(checkIfThisProperyExist("area",circle1));


function checkIfThisProperyExist(property,object){
    if(property in object) return (`${property} already exist in the ${object.constructor.name} object`);
    return (`${property} not exist in the ${object.constructor.name} object`);
}



//Get all the key and values of the object circle...

circle1.area = 20;
circle1.color = "red";

for(let key in circle1) {
    console.log(key,":",circle1[key]);
}

console.log(checkIfThisProperyExist("area",circle1));
