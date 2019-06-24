/*
    Complete the square sum function so that it squares each number passed into it and then sums the results together.

    For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

*/

function squareSum(numbers) {
  var tot = 0;

  numsAlCuadraro = numbers.map(function(numOriginal) {
    return Math.pow(numOriginal, 2);
  });

  numsAlCuadraro.map(function(numero) {
    tot += numero;
  });

  return tot;
}

console.log(squareSum([0, 3, 4, 5]));
