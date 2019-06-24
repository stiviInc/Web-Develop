/**
    Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

    When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

    Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

    S is misinterpreted as 5
    O is misinterpreted as 0
    I is misinterpreted as 1
    The test cases contain numbers only by mistake.

 */

function correct(string) {
  var correctedString = [];
  for (var i = 0; i < string.length; i++) {
    correctedString[i] = string[i];
    switch (string[i]) {
      case "5":
        correctedString[i] = "S";
        break;
      case "0":
        correctedString[i] = "O";
        break;
      case "1":
        correctedString[i] = "I";
        break;
    }
  }
  return correctedString.toString().replace(/,/g,"");   //El pimer parametro del metodo replace se creo una expresión regular para indicar que reemplazará todas las , que encuentre!
}

console.log(correct("51NGAP0RE"));
