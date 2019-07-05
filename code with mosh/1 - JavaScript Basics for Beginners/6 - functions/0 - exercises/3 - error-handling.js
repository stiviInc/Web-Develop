/*
    Apply error handling to the function countOCurrences...
    the first parameter shoueld be an array, validate it!
*/

function countOCurrences(array, searchElement) {
  if (!Array.isArray(array))
    throw new Error("First parameter should be an array of numbers");
  return array.reduce((times, actual) => {
    if (actual === searchElement) times++;
    return times;
  }, 0);
}

try {
  const numbers = [1, 2, 3, 4, 1, 1, 2, 1];
  console.log(countOCurrences(false, 1));
} catch (e) {
  console.log(e.message);
}
