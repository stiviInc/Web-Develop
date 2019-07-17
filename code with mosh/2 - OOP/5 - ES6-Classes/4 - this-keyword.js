/*
    When you make a method call, the "this" keyword will point to the object!
    When you make a function call, the "this" keyword will point to the global object .... in browser -> "Window  Object", in node -> "Global Object"

    Remember:
        A method is a function of an object....
    
    For prevent errors of this type, JS engine offers us the 'strict' mode.... when it is activated and you make a function call instead of a method call... the result of use "this" keyword will be undefined instead of pointing to global object!

    * Activate Strict Mode:
        At the top of the file, write the next sentence:
        'use strict';


    ES5 Classes are compiled by default with strict mode activated, it doesnt matter if you explicity activated or dont!
*/