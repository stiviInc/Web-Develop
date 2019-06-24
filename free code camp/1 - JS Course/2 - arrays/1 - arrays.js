

//          Manipulacion de los index de un array multidimensional

var multidimensionalArray = [[1,2,3],["uno","dos","tres"],[[4,"cuatro"][5,"cinco"],[6,"seis"]]];

//Obtener el valor del arreglo 2 de la posicion 3! ---> tres
var value = multidimensionalArray[1][2];
console.log(value);

//Obtener el valor del arreglo 3 de la posicion 2! ---> [ 6, 'seis' ]
var value2 = multidimensionalArray[2][1];
console.log(value2);

//De la misma posicion anterior obtener solamente el numero del arreglo ---> 6
var value3 = multidimensionalArray[2][1][0];
console.log(value3);

