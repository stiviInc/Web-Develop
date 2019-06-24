/*
    *Crear una función que reciba un numero y devuelva un String indicando si es par o impar
*/


function par_o_Impar(numero){
    if((numero % 2) !== 0){
        return "El número: "+numero+" Es Impar";
    }return "El número: "+numero+" Es Par";
}

console.log(par_o_Impar(5));