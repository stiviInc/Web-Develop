/*  
    Write a function that receive an array as a parameter and print how many truthy values are there!...
*/


let numOfTruthys = (arr) => {
    let cont = 0;
    for(let element of arr) if(!(element === undefined || element === null || element === '' || element === false || element === 0 || element === NaN)) cont++;
    return cont;
}

const arr = ['',1,2,3,0,undefined,null,5];
console.log(numOfTruthys(arr));