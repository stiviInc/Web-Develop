import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import Dog from "./animals/dog";
import Animal, { testingNamedExports } from "./animals/animal";
/*
const element = <h1>Hello bitches!</h1>;

ReactDOM.render(element, document.getElementById("root"));
*/

const tiger = new Animal("Tiguer", "Feline", "Meat");
const dogy = new Dog("Dog", "Mammal", "Croquettes", "Siberian Husky");

console.log(testingNamedExports());

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
