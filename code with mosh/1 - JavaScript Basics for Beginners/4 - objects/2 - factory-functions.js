//Example applying the factory function for create as many Cars as we want it
//Also in this example im declaring properties and methods of the object applying newer and shorter sintax...


function createCars(mark,model,year,price,airConditioner,electricWindows){
    return{
        mark,
        model,
        year,
        price,
        airConditioner,
        electricWindows,
        itsLuxury : () =>{
            return (airConditioner == true && electricWindows == true) ? true : false;
        },
        start(){
            console.log('Starting the engine....roaaaaar');
        }
    }
}

let camaro = createCars("Chevrolet","camaro",2015,"$200000",true,true);
console.log(camaro);
let sentra = createCars("Nissan","Sentra",2014,"$45000",false,false);
console.log(sentra);