/*
    Create a constructor function for create signatures object
    Create 2 functions:
        1.- This function should return if 2 objects are equals (Depending on the value of its properties)
        2.- This function should return if 2 objects are same (Pointing to the same addres location)
*/

function Signatures(name, totalHours, totalCredits, teacher) {
  this.name = name;
  this.totalHours = totalHours;
  this.totalCredits = totalCredits;
  this.teacher = teacher;
}

function areEqual(obj1, obj2) {
  for (let key in obj1) {
    let flag = true;
    obj1[key] == obj2[key] ? (flag = true) : (flag = false);
    if (flag == false) return "Not Equals";
  }
  return "Are Equals";
}

//This functions return "Are Same" if the 2 objects are pointing to the same memory location!
function areSame(obj1,obj2){
    return obj1 === obj2 ? "Are Same" : "Not Same";
}

const spanish = ("Spanish", "30", "15", "Lepe");
const english = ("English", "25", "12", "Danyra");

const english2 = ("English", "25", "12", "Danyra"); //Create another object with same values of english object!

const spanish2 = [...spanish]; //Make a copy of spanish object!
const spanish3 = spanish2;

            //--- Tests --- //
            
console.log(areEqual(spanish, english));    //Compare if spanish and english objects are equals... expected result -> Not Equals

console.log(areEqual(spanish, spanish2));   //Compare if spanish and spanish2 are equals... expected result -> Are Equals
console.log(areSame(spanish,spanish2)); // Not Same

console.log(areSame(spanish,english));      //Compare if spanish and english objects are same... expected result -> Not Same

console.log(areSame(english,english2));     //Compare if english and english2 objects are same... expected result -> Are Same


console.log(areSame(spanish2,spanish3));    //Are Same
console.log(areEqual(spanish2,spanish3));   //Are Equals