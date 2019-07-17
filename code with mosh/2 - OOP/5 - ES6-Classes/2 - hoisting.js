/*
    When a JS is compiled, its engine make a proccess called "Hoisting", this means that all Function Declaration are raised to the top... thats why those functions can be invoke since wherever part of the code, its doesnt matter if the function declaration its below of the calling!

    Hoisting its only applied to functions declaration not to functions expression!


    //Function Declaration
    function test(){}

    //Function Expression
    const test = function(){

    }


    Buuuuuuuuuuuuuuuuut the hoisting is onyl applied to functions declaration, it doestn aplly to Class Declaration.... Classes Declaration are not hoisting!

    In other words, we cant create an instance of a class before its declaration!
*/