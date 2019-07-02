/*
    The .map() method allows us to acces each element in an array for work with them and returns something different in a new array, even objects!

    .map() takes as parameter a callback funcion(it can be an arrow function!)

    Note: Sometimes you can think that use .map can solve something, like example, select specificly items depending on something, but this task can be done by the .filter(), so take care on what method will you choose!

*/

//Dada una lista de clientes, mostar en pantalla aquellos que  deban mas de $15,000

function Client(nameClient,doubt){
    this.nameClient = nameClient;
    this.doubt = doubt;
}

const clients = [
    new Client("Carlos",0),
    new Client("Stalin",1500),
    new Client("Cuki",25000),
    new Client("Miguel",2500),
    new Client("Valeria",15500),
    new Client ("Antonio",0),
    new Client("Xochitl",5000),
    new Client("Osiris",12500),
    new Client("Dalia",17500),
    new Client("Araceli",0)
];

const clientsWithDoubt = clients
.filter(client => client.doubt > 0)
.map(client => `${client.nameClient} owes us ${client.doubt}`)
.join('\n');


console.log(clientsWithDoubt);