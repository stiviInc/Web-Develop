//Constructor Function Pattern to create objects!...

// * Important Note:
//Its unnecesary use the keyword return for "return" the object, this pattern do it automaticlly because since the functions its invoke, the object its created....


function Cars(mark,model,year,airConditioner){
    this.mark = mark;
    this.model = model;
    this.year = year;
    this.airConditioner = airConditioner;
    this.itsLuxury = () =>{
        return airConditioner == true ? true : false;
    }
}

let camaro = new Cars("Chevrolet","Camaro",2010,true);
console.log(camaro);
let sentra = new Cars("Nissan","Sentra",2012,false);
console.log(sentra);

    //As you can see, this pattern its to similar of Java Notation, thats why, personally, I think imma use this one!....