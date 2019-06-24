/*      
    Write a function that receive a number as input and returns all prime numbers between 0 and the numbers itself....
*/

function showPrimes(limit){
    for(let i = 2; i <= limit; i++) if(itsPrime(i) == true) console.log(i); 
}

function itsPrime(number){
    for(let i = 2; i < number; i++) if (number % i === 0) return false;
    return true;
}

showPrimes(20);