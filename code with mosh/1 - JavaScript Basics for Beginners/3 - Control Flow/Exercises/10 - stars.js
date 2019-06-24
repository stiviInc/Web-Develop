/*
    Write a function that receive a number as a input, this number indicates the limit of how many iteration will be done.
    The loop will be from 0 to the number itself, and in each iteration, it'll have to display * as much as the number of the iteration its...
    Like example:
    In iteration 4 will have to display: ****
    In iteration 6 will have to display: ******
*/

function showStars(rows) {
  for (let i = 1; i <= rows; i++) {
    let stars = "";
    for (let aux = 1; aux <= i; aux++) stars += "*";
    console.log(stars);
  }
}

showStars(150);
