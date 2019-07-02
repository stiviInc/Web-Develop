/*
    JS offers use 2 powerful methods to sort arrays...

    1.- sort()      --->    Sort the values from lower to higher
    2.- reverse()   --->    This method only reverse the array, from last index to first index...
    ... so it means that if you want to sort an array from higher to lower, you have to sort() first the values from lower to higher, and then reverse() the array...
*/

//Sorting arrays of primitive values
const numbers = [3,5,2,1,7,9];
//numbers.sort();
numbers.sort().reverse();
console.log(numbers);



