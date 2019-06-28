/*
    Create an addres object that have as properties the following:
        - street
        - city
        - zipCode

    And then create a function that receibe an addres object and show all its properties
*/

function Addres(street,city,zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function showAllProperties(addres){
    for(let key in addres) console.log(key,":",addres[key]);
}

const myAddres = new Addres("Ocampo 131", "Ciudad Guzmán", "49000");

//Show all properties of myAddres object
showAllProperties(myAddres);