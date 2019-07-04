/*
    Write a function that receibe an array and returns its maximum value!
    Implement the reduce() function to solve this problem
*/

function getMax(array) {
  if (array.length == 0) return undefined;
  else {
    return array.reduce((max, actual) => {
      if (actual > max) max = actual;
      return max;
    });
  }
}

const numbers = [-2, -1, -8];

console.log(getMax(numbers));


/*
    Tip: Allways when you are working with arrays and you need to get a single value of it, think in use the .reduce() method to solve your problem!
*/