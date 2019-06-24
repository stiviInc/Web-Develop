var naves = {
  yova: "VRU",
  aritos: "MMO",
  daniel: "MMO",
  "sin aros": "EIC"
};

var strongestShip = "yova";

var enterpriseOfMyStrongestShip = naves[strongestShip];

console.log(enterpriseOfMyStrongestShip);

/** Crear un objeto con propiedades y valores iniciales, modificar el valor de una de sus propiedades y mostrar que dicho cambio se realizo! */
var modelo = {
  nombre: "ariana james",
  apodo: "ary",
  peso: "50 kg",
  altura: "165 cm",
  categoria: "fitness",
  edad: 26
};

console.log("Peso antes de actualizar: " + modelo.peso);
modelo.peso = "52 kg"; //De esta manera se actualizaría el valor de la propiedad peso!
console.log("Peso despues de actualizar: " + modelo.peso); //Verificar el nuevo valor de la propiedad peso

/* *Agregar una propiedad a un objeto ya creado! */
var obj = {
  propiedad1: "valor1",
  propiedad2: "valor2"
};

obj.propiedad3 = "propiedad3";

console.log(obj.propiedad3);

/* Eliminar la propiedad que se acaba de agregar */

delete obj.propiedad3;

console.log(obj);
