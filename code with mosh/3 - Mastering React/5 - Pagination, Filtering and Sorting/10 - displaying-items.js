/*
    Remember, the perfect place to call backend services and updates values from the state is in the componentDidMount() ----> This method is call each time a component is render()
---------------------------------------------------------------------------------------------------------------------------------------------------------------

    For a better implementation and make reusable our component, we cant assume every items list the component will receibe always going to have the same name properties... for solve this, we should pass since the parent component the exaclty name of them.... 

Like example: 
Your array has to have an id and name property, 
but another array can have same properties defined with another name, 
like example: key, text... or value, label

    That is why in our listGroup component we have to access the properties using the exactly name of each array, and this values will be receibed in the props....
This means, since the parent we have to send the name of the properties:

Example:
const genres = [
    {_id: 1, name: "action"},
    {_id: 2, name: "love"}
]

    we need to send in the props of the next way:
keyProperty= "_id"
valueProperty= "name"


    And in generall, the sintax is the following:

    Sintax:
    namePropertyWillBeUsedInTheComponentChild = "namePropertyDefinedInTheArray"


*** In the child component ***
for access the data receibed in the array we need to use the "[]" notation... we can not longer keep using the "." notation....

    Example:
    array[namePropertySendSinceItsParent] ....

    *********************************************************
    There is also another way to set default props and avoid to send the name of them since the parent component, this will simplify the implementation....
    Check the file call "11- default-props.js"
*/
