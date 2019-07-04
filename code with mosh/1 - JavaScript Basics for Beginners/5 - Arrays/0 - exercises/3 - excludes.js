/*
    Write a function that receibe 2 parameters, one of them is an array, and the second one is another array, the values of this second array will be removed from the first array...
    the function should return an array without the values store in the second array!
*/

function exclude(array, excluded) {
  const output = [];
  for (let element of array)
    if (!excluded.includes(element)) output.push(element);
  return output;
}

const nums = [1, 2, 3, 4, 1, 2, 1, 2, 1];

console.log(exclude(nums, [1, 2]));
