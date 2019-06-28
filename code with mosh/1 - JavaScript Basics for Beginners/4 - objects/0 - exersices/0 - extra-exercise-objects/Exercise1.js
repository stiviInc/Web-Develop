/* 
    Write a JavaScript program to get the length of an JavaScript object.
*/

function Person(name,age,sex,nationality){
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.nationality = nationality;
    this.function = () =>{
        console.log("This is a function");
    }
}

let stalin = new Person("stalin",22,"Male","Mexican");

console.log("Stalin's length object: ",getObjLength(stalin));
function getObjLength(obj){
    let aux = 0;
    for(let key in obj) aux++;
    return aux;
}