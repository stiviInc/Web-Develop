/*
    Copy+paste the code of the last exercise, and add the following requests:

    1.- create a render() method and override it in each object!
    2.- create a constrcutor function HtmlImageElement with src as a property and render() method!
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

//Add render method to its prototype
HtmlElement.prototype.render = function(){
    console.log("Renderd");
}

//Constructor Function HtmlSelectedElement
function HtmlSelectedElement(...values) {
  this.items = [...values];
  this.addItem = value => {
    this.items.push(value);
    return `${value} has been added at the array!`;
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
HtmlSelectedElement.prototype = new HtmlElement();
//Reset the constructor!
HtmlSelectedElement.prototype.constructor = HtmlSelectedElement;
//render method() of HtmlSelectedElement
HtmlSelectedElement.prototype.render = function(){
    /*
    let aux = `<select>\n`;
    for(let val of this.items) aux += `\t<option>${val}</option>\n`;
    aux += `</select>`;
    return aux;
    */
   //The code above was the old way of dit it, the code below is how its done now with ES6
   return `
<select>${this.items.map(item => `
    <option>${item}</option>`).join('')}
</select>`;
}

//HtmlImageElement constrcutor function
//if nothing was sent as parameter, src property will be initialize as an empty string!
function HtmlImageElement(source = ""){
    this.src = source;
}
//make HtmlImageElement inherit from HtmlElement
HtmlImageElement.prototype = new HtmlElement();
//Reset the constructor
HtmlImageElement.prototype.constructor = HtmlImageElement;
//render method() of HtmlImageElement
HtmlImageElement.prototype.render = function(){
    return `<img src="${this.src}" />`;
}



const elements = [
    new HtmlSelectedElement(1,2,3),
    new HtmlImageElement("http://google.com.mx")
]

for(let element of elements) console.log(element.render());