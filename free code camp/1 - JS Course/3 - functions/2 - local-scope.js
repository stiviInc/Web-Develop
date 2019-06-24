function myLocalScope(){
    var localScope = 5;
    console.log(localScope + 10);
}

myLocalScope();

console.log(localScope);    //Esta linea da error ya que la variable que se quiere acceder es de ambito local!