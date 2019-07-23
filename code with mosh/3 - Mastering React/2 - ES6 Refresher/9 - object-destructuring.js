/*
    Destructuring objects is powerful feature that simplify the code!
*/

const addres = {
  city: "",
  country: "",
  phone: ""
};

//Old way of get property's object!
const city = addres.city;
const country = addres.country;
const phone = addres.phone;

//Getting property's object applying object destructuring!
const { city, country, phone } = addres;

//Sintax of object destructuring:

const { propertyName: constantWhereTheValueWillBeAssign } = objectName;

//Example of object destructuring...
const { phone: number } = addres; //The constant where the value will be stored is named number!...

console.log(number);
