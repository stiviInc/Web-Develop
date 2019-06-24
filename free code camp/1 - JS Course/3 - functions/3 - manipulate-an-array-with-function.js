//Crear una función qu elimine la ultima posición de un arreglo y le agrege un valor valor al inicio
function nextInLine(arr,item){
    arr.push(item);             //Agrega al final
    return myArray.shift();     //Quita al principio
}

var myArray = [1,2,3,4,5];

console.log("myArray: antes "+ JSON.stringify(myArray));

nextInLine(myArray,6);  

console.log("myArray: despues "+JSON.stringify(myArray));

/*  JSON.stringify(objeto/valor) ---> Convierte un objeto o valor de JS en una cadena de texto JSON.    */

