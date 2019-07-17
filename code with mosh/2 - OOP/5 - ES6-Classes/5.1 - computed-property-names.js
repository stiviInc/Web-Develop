/*
                *** Computed Property Names ***
                
    In ES6 exist a feature called computed property names, wich allows to have our propertie take variables, this means you can create a variable wich its value will be the name of your property....
    --- Rules ---
    When you will use the compute property name, you have to use strictly the [] notation!....

    See the next example :

    //Create the variable wich its value will be the name of the property!...
    var fruit_var = 'fruit'

    //Use the variable to define the property!
    var eatables = {[fruit_var]: 'Apple', vegetable: 'Carrot'}

    //As you can see, where the variable was used appears its value... this is like a weird override stuff.... you write the name of the variable, and its value is wich one will be saved....
    console.log(eatables) // {fruit: 'Apple', vegetable: 'Carrot'}
*/