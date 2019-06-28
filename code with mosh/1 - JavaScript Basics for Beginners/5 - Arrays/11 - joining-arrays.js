//The join() method returns a string with all values of the array separating each one with the symbol indicate in the join('simbol');


//Example: Transform all the blank spaces into '-' of the next String

const title = "Vendo cuenta full";

const transform = title.split(' ').join('-');   //First the string turns into a array and then that array turns intro a string separating each value with the '-'

console.log(transform);