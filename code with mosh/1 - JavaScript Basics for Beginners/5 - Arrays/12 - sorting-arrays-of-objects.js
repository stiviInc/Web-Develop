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
                                                                         ascending      ...     descending
    if the property of obj1 is greather than the property of obj2   ---> return 1       ...     return -1
    if the propert of obj1 is lower than the property of obj2       ---> return -1      ...     return 1
    otherwirse, (if are equals)                                     ---> return 0       ...     return 0

            * Note:
                This values sort the values in ascending order, it means, the minimun value is the first and the max value is the last...
                if we want to sort by descending order, we only will have to switch the result in [ obj1 > obj2 for -1 and the result in obj1 < obj2 for 1 ]
    
        ***---***---
    Tricky hack:
        Descending Order:
            Instead of use the above 3 if statements, for sort by descending order, we can make a substract betwen the obj1.propertie - obj2.propertie...just like that:
            array.sort((obj1,obj2) => obj1.prop - obj2.prop);
        
        Ascending Order:
            And if we want to sort by ascending order, we apply the same as in descending order, and at the result we only apply the .reverse() method:
            array.sort((obj1,obj2) => obj1.prop - obj2.prop).reverse();

    

*/
console.log(ussers);