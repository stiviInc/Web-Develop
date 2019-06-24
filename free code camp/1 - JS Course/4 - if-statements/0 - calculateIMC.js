/*  
    *Crear un programa que calcule tu imc
    *La formula es la siguiente:
    *IMC = peso en KG / altura en cm al cuadrado

    Y de acuerdo a los siguientes rangos te indique en que clasificación te encuentras!

    Información obtennida de la siguiente foto:

    https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjrpv-5vOLiAhUrwlQKHVhfD8cQjRx6BAgBEAU&url=https%3A%2F%2Fviviendolasalud.com%2Fdieta-y-nutricion%2Findice-masa-corporal-imc&psig=AOvVaw1e0rUQsaaATXJxTQzXy3mS&ust=1560378339369591
*/

function calculateIMC(peso,altura){
    var imc = peso / (Math.pow((altura/100),2));
    
    if(imc < 18.5){
        return "Infrapeso";
    }else if(imc >= 18.5 && imc <= 24.9){
        return "Peso Normal";
    }else if(imc >= 25 && imc <= 29.9){
        return "Sobrepeso";
    }else if(imc >= 30 && imc <= 34.9){
        return "Obesidad";
    }else if(imc >= 35){
        return "Obesidad Morbida";
    }else{
        return "Something went wrong";
    }
}

console.log(calculateIMC(92.5,184));