/*
    Write a function that makes the sum of the parameters that it receibes... it can receibe an array of numbers or just numbers and in both cases have to return the sum...
*/

function sum(...args) {
  //In order to make that this function works properly, if the parameter receibed was an array, we have to spread it, and the way of do it is the followin...
  Array.isArray(args[0]) ? (args = [...args[0]]) : (args = args); //In args[0] its stored the array of numbers, so we have to apply the spread operator in that position!... [...args[0]]

  return args.reduce((sum, actual) => (sum += actual));
}

console.log(sum([1, 2, 3, 4]));
