/*
    Write a function that receive an array of numbers as a input and returns a grade according the next conditions:

    - if average =  1 - 59 : 'F'
    - if average = 60 - 69 : 'D'
    - if average = 70 - 79 : 'C'
    - if average = 80 - 89 : 'B'
    - if average = 90 - 100: 'A'

*/

let grade = califications => {
  let avg = 0;
  for (let cal of califications) avg += cal;
  avg /= califications.length;
  const msg = `The avg its: ${avg}, so the grade is a: `;

  if (avg < 60) return `${msg} F`;
  else if (avg < 70) return `${msg} D`;
  else if (avg < 80) return `${msg} C`;
  else if (avg < 90) return `${msg} B`;
  else if (avg < 100) return `${msg} A`;
};

const califications = [100, 70, 95, 90, 100];

console.log(grade(califications));
