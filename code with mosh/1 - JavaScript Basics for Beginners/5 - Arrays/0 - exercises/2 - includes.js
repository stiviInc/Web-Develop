/*
    Write a function that will take 2 parameters, one of them is an array and the second is an element that will search into the array....
    if the element is in the array, return true, otherwise, return false...

    Note: In JS exist the method includes(), but for solve this exercise, you should write the code by hand to simulate the same function that includes() does
*/

function includesFunction(array,searchElement){
    for(let element of array)  if(element === searchElement) return true;
}

const numb = [1,2,3,4];
includesFunction(numb,3) ? console.log("Si existe") : console.log("No existe");

const string = "hola amiwo como esta usted?";
includesFunction(string.split(" "),"perro") ? console.log("Si existe") : console.log("No existe");
