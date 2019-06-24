/*
    Write a function that receive a number as input and iterate from 0 to the number itself, and display in each number of the iteration if its "even" or "odd"....
*/

let showNumbers = number => {
  for (let i = 0; i <= number; i++) {
    const msg = `Number: ${i} its: `;
    const res = i % 2 == 0 ? `EVEN` : `ODD`;
    console.log(msg, res);
  }
};

showNumbers(10);
