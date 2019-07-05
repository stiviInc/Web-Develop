/*
    Use the arguments keyword for make the sum of all the parameters that a function receibe...
*/

function sum(){
    let total = 0;
    for(let val of arguments) total += val;
    return total;
}

console.log(
    sum(1,2,3)
);