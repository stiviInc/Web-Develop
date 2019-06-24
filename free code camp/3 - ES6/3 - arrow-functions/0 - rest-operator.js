

/*
// Recordar que el rest operador se considera como un array con los parametros que se reciban!...
const sum = (...args) => {
  //a es el acumulador y su valor inicial es el primer valor del array!
  //b comienza a partir del segundo valor del array y en cada iteración va tomando el valor de la siguiente posición del mismo!
  //El ultimo valor que va despues de la coma es valor inicial!
  return args.reduce((a, b) => a + b, 0);
};
*/

// Recordar que el rest operador se considera como un array con los parametros que se reciban!...
const sum = (...args) => args.reduce((a, b) => a + b, 0);
                          //a es el acumulador y su valor inicial es el primer valor del array!
                          //b comienza a partir del segundo valor del array y en cada iteración va tomando el valor de la siguiente posición del mismo!
                          //El ultimo valor que va despues de la coma es valor inicial!

console.log(sum(1,2,3));
