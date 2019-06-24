/*
    Use template literal syntax with backticks to display each entry of the result object's failure array. Each entry should be wrapped inside an li element with the class attribute text-warning, and listed within the resultDisplayArray.
*/

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {
  "use strict";
  /* Solución 1
  // change code below this line
  const [a, b, c] = [arr[0], arr[1], arr[2]];
  const resultDisplayArray = `<li class="text-warning">${a}</li>
<li class="text-warning">${b}</li>
<li class="text-warning">${c}</li>`;
  // change code above this line

*/

  //Solución 2

  const resultDisplayArray = arr.map(item => `<li class="text-warning">${item}</li>`);
  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`,
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);

console.log(resultDisplayArray);
