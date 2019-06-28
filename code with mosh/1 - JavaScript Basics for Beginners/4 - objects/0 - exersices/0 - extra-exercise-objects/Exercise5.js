/*  
    Write a JavaScript function to retrieve all the values of an object's properties
*/

function Student(name,age,grade){
    this.name = name;
    this.age = age;
    this.grade = grade;
    this.problems = [];
    this.addProblem = (date,description,problems) => {
        let newProblem = {
            date,
            description
        }
        problems.push(newProblem);
    }
}

let stalin = new Student("Stalin Macias",22,9);

stalin.addProblem("6/27/2019","He said pussy at his partner",stalin.problems)
console.log(stalin);

console.log("---------------------\nObject's Properties");
for(let key in stalin) console.log(key);

console.log("---------------------\Value's Properties");
for(let key in stalin) console.log(key,":",stalin[key]);


function checkIfPropertyExists(nameProperty,object){
    return nameProperty in  object ? `The ${nameProperty} property already exists in the ${object.name} object` : `The ${nameProperty} property doesnt exists in the ${object.name} object`
}

console.log(checkIfPropertyExists('institute',stalin));
console.log(checkIfPropertyExists('name',stalin));