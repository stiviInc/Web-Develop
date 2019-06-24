//In this file I'm gonna test the for..of vs .map() function, just for try to find a difference!


const animals = ["dog","cat","cow","butterfly"];


animals.map(animal => {
    //animal == "cat" ? break; : console.log(animal);
    console.log(animal);
});


console.log("-------------------");

for(let animal of animals) {
    if (animal === "cat") continue;
    else console.log(animal);
}