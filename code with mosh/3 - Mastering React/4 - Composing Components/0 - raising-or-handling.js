/*
    in order to know when define a handle method or send reference for raising an event, just follow this tips:

    - if the element is defined in that component, you need to create a handle method in it....
    - if the element is defined in a child component, you need to send reference for raising an event....


    *** Remember ***

    Raising an events means that the call will be made from the child component, because that element is defined there, but the handle method will be defined in the parent component!

*/
