/*
    The logic of a getter and setter is the same as in java...

    *Getter:
    for define a getter in a object you have to use the keyword "get" before the name of the function(){//code}


    *Setter:
    for define a setter in a object you have to use the keyword "set" before the name of the function(){//Code}

    The way of invoke a set method() is the following:
        objName.nameMethod = 'value to set';


        * Scoope of the variables *
    inside the getters and setters you can acces the object properties values, so you can use them helping yourself with the keyword "this"

        SUPER IMPORTANT:    Getter and Setter only works when you are creating a single object, it doesnt work when you are creating a constructor function!
*/

const person = {
    name : "Stalin",
    lastname : "Macias",
    get fullName(){
        return `${this.name}  ${this.lastname}`;
    },
    set fullName(value){
        const parts = value.split(' ');
        this.name = parts[0];
        this.lastname = parts[1];
    }
}


console.log(
    person.fullName = "Updated maderfaker"
)



                                            /* --- Important note --- */
                                        //The name of the set or get cant be the same as some property previously defined in the object!