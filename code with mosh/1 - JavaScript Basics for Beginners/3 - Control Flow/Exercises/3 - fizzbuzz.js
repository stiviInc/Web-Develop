/*
    Write a function that receibe an input and the return will be according the following conditions:

    - Number divisible by 3 -> Fizz
    - Number divisible by 5 -> Buzz
    - Number divisible by both, 3 and 5 -> FizzBuzz
    - Number not divisible by 3 or 5 -> input
    - not a number -> 'Not a number'
*/

const output = input => {
  if (typeof input !== "number") return "Not a number";
  else {
    if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
    else if (input % 3 === 0) return "Fizz";
    else if (input % 5 === 0) return "Buzz";
    else return input;
  }
};

console.log(output(15));
