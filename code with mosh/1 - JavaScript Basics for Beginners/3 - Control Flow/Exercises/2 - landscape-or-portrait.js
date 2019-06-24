/*
    Write a function called isLandscape that returns true or false depending the following conditions:
    If the width is greather than the height, returns true ---> Its landscape
    Other wise returns false ---> Its portrait!
*/

//Returning a boolean result!
let orientationBoolean = (width,height) => width > height;  //If we only declare the comparisson, the return value will be the result of the comparisson, (true or false)...

console.log(orientationBoolean(300,400));

console.log(orientationBoolean(450,300));

console.log(orientationBoolean(400,400));

//Returning a String result!
let orientationString = (width,height) => width > height ? "Lanscape" : "Portratit";
console.log(orientationString(300,400));

console.log(orientationString(450,300));

console.log(orientationString(400,400));