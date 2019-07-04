/*
    Write a function that receibe 2 parameters, the first of them is an array, and the second is an element that will be search in the array, and per each time that element will be found, increase a counter and return the total ocurrences of that element in the array!...
*/

function countOcurrences(array, element) {
  return array.reduce((ocurrences, actualValue) => {
    if (actualValue === element) ocurrences++;
    return ocurrences;
  }, 0);
}

const numbers = [1, 2, 3, 4, 3, 2, 4, 3];

console.log(countOcurrences(numbers, 2));
