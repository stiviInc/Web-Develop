/*
    Given an array of integers, return a new array with each value doubled.

    For example:

    [1, 2, 3] --> [2, 4, 6]

    For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.


    Para ver mas información relacionada a la función map() visitar ---> https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map
*/

function maps(x) {
  var dobles = x.map(function(value) {
    return value * 2;
  });
  return dobles;

  Math.pow();
}

console.log(maps([1, 2, 3]));
