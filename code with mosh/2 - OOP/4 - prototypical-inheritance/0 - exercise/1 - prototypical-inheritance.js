/*
    1.- Create a constructor function named HtmlElement with one own method named click() and one method in its prototype named focus()
    2.- Create a constructor function named HtmlSelectElement with the next properties and methods:
        - addItem() ---> This method will receibe one parameter and will add it to items array...
        - items     ---> This propertie reffers to an array where local HtmlSelectedMethods will work....
                        if a new object of this constrcutor is created and are sent values, these values have to be added into this array, if not, leave the array empty waiting for values to be added!
        - removeItem() --> This method will receibe one value, the value will be search in the array, and if its find, it'll be removed from it!

    3.- Its important to make that HtmlSelectedElement inherit from HtmlElement... Important Note: The HtmlSelectedElement also have to inherit the click() method that belong to HtmlElement and not at HtmlElement.prototype....
    Suggestion: Create an instance of HtmlElement not a HtmlElement.prototype!
*/

//Constrcutor Function HtmlElement
function HtmlElement() {
  this.click = () => {
    console.log("Clicked");
  };
}

//Add focus method to its prototype
HtmlElement.prototype.focus = function() {
  console.log("Focused");
};

//Constructor Function HtmlSelectedElement
function HtmlSelectedElement(...values) {
  this.items = [...values];
  this.addItem = value => {
    this.items.push(value);
    return `${value} has been added at the array!`
  };
  this.removeItem = value => {
    for (let val of this.items) {
      if (val === value) {
        this.items.splice(this.items.indexOf(val), 1);
        return `${value} has been removed from the array!`;
      }
    }
    return `The value: ' ${value} ' was not found in the array!`;
  };
}

//Make HtmlSelectedElement inherit from HtmlElement but creating an instance... not inherit directly from its prototype!
HtmlSelectedElement.prototype = new HtmlElement();  //Remember... the "new" operator creates an empty object!...
//Reset the constructor!
HtmlSelectedElement.prototype.constructor = HtmlSelectedElement;


let test = new HtmlElement();

let testSelectedElement = new HtmlSelectedElement();

console.log(testSelectedElement.removeItem(2));
console.log(testSelectedElement.addItem(2));

console.log(testSelectedElement.items);
