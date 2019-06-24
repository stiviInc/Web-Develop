//Crear una función que reciba como parametro el nombre de una propiedad que se desea conocer si existe en el objeto myObj y devolver el valor de dicha propiedad si es que existe o un "Not Found" en caso de que no exista!

var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  //Verificar si el objeto tiene la propiedad indicada!
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else return "Not Found";
}

console.log(checkObj("gift"));
console.log(checkObj("pusyy"));
