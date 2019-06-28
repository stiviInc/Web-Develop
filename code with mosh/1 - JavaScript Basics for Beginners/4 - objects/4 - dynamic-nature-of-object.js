//Create a constructor function that create a gym member object and then create 2 objects using the constructor and then modify each object individually, add new properties and delete some of the original properties

function GymMember(name,age,typeOfMembership,mensuality,timeBeingMember){
    this.name = name;
    this.age = age;
    this.typeOfMembership = typeOfMembership;
    this.timeBeingMember = timeBeingMember;
    this.mensuality = () =>{
        if(timeBeingMember > 6 && timeBeingMember <= 12) return  mensuality - (mensuality * .15);    //15% off when the member have 6 months in the gym (from 6 to 12 months!)
        else if(timeBeingMember > 12) return  mensuality - (mensuality * .25)
    }
}


const stalin = new GymMember("Stalin",22,"Pro Member",300,10);

//console.log(stalin);

stalin.timeBeingMember += 1;
console.log(stalin.mensuality());

stalin.sex = "Male";
//console.log(stalin);

delete stalin.mensuality
console.log(stalin);

const chobe = new GymMember("Osiris",20,"Normal",280,3);
console.log(chobe);
delete chobe.age;