/*
    Write a JS program where will be a function that receibe 2 parameters, one of them represent the min and the other the max values...
    This function should return an array with the number since the min to the max...
    Example:
    min = 2 , max = 5
    let arr = [2,3,4,5] ---> This is the array the function should return!
*/

function arrayFromRange(min, max) {
  const numbers = [];
  for (let aux = min; aux <= max; aux++) numbers.push(aux);
  return numbers;
}

console.log(arrayFromRange(-10, 2));
