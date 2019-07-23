/*
    Due to how the method where the event is handled, the "this" keyword is rebinding and this is not pointing any more to the actual object....

    Thats why we have to make a little trick to avoid rebinding when the method is called....

    The easiest way of achieve it is by implementing an arrow function.... remember, arrows functions dont rebind, them still pointing its parent object!

    So, this means, we only have to change the implementantion of the method for an arrow function...

*/
