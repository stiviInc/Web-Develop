//There are three ways of iterate an array


//1.- for..of loop

const arr = [1,2,3,4];

for(let number of arr) console.log(number);

//2.- for..in loop  ---> With the for..in we get the index's...

for(let index in arr) console.log(index,":",arr[index]);

//3.- for-each

arr.forEach((number,index) => console.log(index,":",number))


//There are no differences between each one, so, is up to you decide wich one will you use