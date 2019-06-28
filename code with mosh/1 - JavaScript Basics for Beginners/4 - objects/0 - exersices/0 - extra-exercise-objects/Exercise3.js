/*
    Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. Go to the editor

    The formula for calculate the area was taken from here :http://www.calculararea.com/cilindro.htm

    where r is the radius and h is the height of the cylinder.
*/

function Cylinder(radius,height){
    this.radius = radius;
    this.height = height;
    this.volume = (2 * Math.PI * radius * (radius + height)).toFixed(4);
}

let cylinder1 = new Cylinder(3,4);

console.log(cylinder1);