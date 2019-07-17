//Imports
const Gun =  require('./guns').Gun;
const Pistol = require('./guns').Pistol;

//Creating Objects with the imports!
const pistol = new Pistol("m45","pistol","45");
const gun = new Gun("pump","shotgun","100");

//Accesing properties and methods of the objects!
console.log(pistol.shoot());
console.log(gun.shoot());