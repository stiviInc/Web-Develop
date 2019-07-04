/*
    The .reduce() method takes 2 parameters, the first it's a callback function and the second is the value that will be assigned to the initial value of the accumulator...

    The callback function takes also 2 parametres, the first of them is the acummulator, and the second is the current value....

        Description of how the callback function works....
    The accumulator will take the initial value that is sending in the second parameter of the .reduce() method, if theres no second value, will take the first value of the array!
    
    Then, this function will iterate the whole array, in each iteration, the current value will be that one 
    find in that position...

    The current value will be added to the accumulator, and at the end, the function will return the value of sum after make the sum of the whole values in the array!

    In simple words. this functions returns a single value after the iteration of an array... it can be a number, an object, a string, etc...

    ///---///---///---///---///---///---///---///---///---///---///---///---///---///
                In the following example, the .reduce() method will return the sum of all values in an array plus 5... because the initial value of accumulator its 5...

                arr.reduce((accumulator,currentValue) =>{
                    return accumulator + currentValue)
                }, 5);
    ///---///---///---///---///---///---///---///---///---///---///---///---///---///


    if you dont define a second parameter, the accumulator value will be the vale of the firs position in the array!
*/
