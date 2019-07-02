/*
    Write a JS program to determine if all the letters in a string are lower case!
*/

let msg = "lets see how it works";
/*
    Logic of the following function:    
    the function receibe a string as parameter, first removes all whitespace of the msg and then turns the string into an array, then the every() method is invoke...

    For order to know if all letters are lower, have to compare each letter of the array and compare it with the same letter applying the toLowerCase() method.... if 1 letters is UpperCase it'll return false and the search gonna stop...
*/
function checkIfAllLettersAreLower(msg){
    return msg.replace(/\s/g,"").split('').every(letter => letter === letter.toLowerCase());
}

console.log(checkIfAllLettersAreLower(msg));