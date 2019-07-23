/*
    One way of rendering classes dynamically it could be by creatting a method, where the name of the classes will be assign depending the conditions you stablish...
    Like example, depending the value of a certain property....

    And for assign the result of the method created, we only have to call it after className... remember, the way of embeed JS expressions in JSX is inside of {}....
    so, our code would look like this:

        <element className = {this.nameMethod()}></element> 

*/

//Create a method where the class badge of bootstrap will be assigned depending the value of a flag!

function getBadgeClasses(flag) {
  let classes = "badge badge-";
  classes += flag === true ? "success" : "warning";
  return classes;
}

console.log(getBadgeClasses(true));
