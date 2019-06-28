/*
    Create a factory and constructor function for the same addres object!
*/

function addresFactoryFunction(street,city,zipCode){
    return{
        street,
        city,
        zipCode
    }
}

function AddresConstructorFunction(street,city,zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function showAllAdressProperties(addres){
    //console.log(addres.constructor.name);
    for(let key in addres) console.log(key,":",addres[key]);
    console.log("------------------------");
}

let myOldAddres = addresFactoryFunction("Ogazon 89","Ciudad Guzman","49090");
let myActualAddres = new AddresConstructorFunction("Ocampo 131","Ciudad Guzman","49000");

//Show all properties from myOldAddres
showAllAdressProperties(myOldAddres);
//Show all properties from myActualAddres
showAllAdressProperties(myActualAddres);