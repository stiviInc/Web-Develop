/*
    For order to sort an array of objects, we have to use the callback function that sort() method allows to send as parameter...


*/
function Usser (name,company,lvl){
    this.name = name;
    this.company = company;
    this.lvl = lvl;
}

const ussers = [
    new Usser("Humberto","VRU",24),
    new Usser("maciitas96","MMO",22),
    new Usser("Macias","VRU",24),
    new Usser("Chobiu","MMO",23),
    new Usser("Chapu","EIC",19)
]


//Order the ussers array from lower level to higher level...
ussers.sort((usser1,usser2) => (usser1.lvl > usser2.lvl) ? 1 : (usser1.lvl < usser2.lvl) ? -1 : 0);

/*
    Description of the logic that is applied for sort an array of objects by a specific property...
    The callback function of the sort method take as arguments 2 values, this values refers to the object where the property that will be use as sorting value are.

    Example of the above explanation:
    Taking the next object as reference:
    const obj = {id:1,name:"stalin"}
    
        *if we would like to sort by the id... the values that should be on the callback function are the objects where the id property is... it means: obj1,obj2   ....
    
    Then, the code that is execute in the callback function:
    this code only makes the corresponding comparissons for sort the values...
    if the property of obj1 is greather than the property of obj2   ---> return 1
    if the propert of obj1 is lower than the property of obj2       ---> return -1
    otherwirse, (if are equals)                                     ---> return 0

*/
console.log(ussers);