const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  /*
  const squaredIntegers = arr.map((number) =>    {
    if(number >= 0 && number % 1 == 0)  return Math.pow(number,2);
  });
*/
    const squaredIntegers = arr.filter(number => number >= 0 && number % 1 == 0).map(number => Math.pow(number,2));

  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);