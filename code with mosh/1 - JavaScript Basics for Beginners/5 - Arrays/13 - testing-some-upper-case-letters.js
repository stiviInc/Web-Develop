/*
    Write a JS program to determine if some (at least one) letters in a string are upper case!
*/

const msg = "hello Its me ";


function checkIfAtLeastOneUpperCase(cad){
    return cad.replace(/\s/g,"").split('').some(letter => letter === letter.toUpperCase());
}

console.log(
    checkIfAtLeastOneUpperCase(msg)
);