/*
    Write a function that receibe 3 parameters.
        1.- an array
        2.- the index where the movement will start
        3.- the number of indexes the value will be moved!
    This function should reorder and return an array according to the second and third parameter....

    Example:
    If the index its 1 and the offset is 2, it means you have to move the value at index 1 to 2 indexes at the rigth....
    If the offset its neggative, the movements goes at the left
    
    let nums = [1,2,3,4];

    moveElements(nums,1,2);

    //Expected result => [1,3,4,2];
*/

function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    return "Invalid Offset";
  }
  const copyArray = [...array];
  const removedNumber = copyArray.splice(index, 1)[0]; //Remove the element at the index indicated from the array... remember that splice() method returns an array with the elements that were removed, each element in one position!, like in this case we only removed one element, that elements is placed at index 0
  copyArray.splice(position, 0, removedNumber); //Add again the value into the array
  return copyArray;
}

const arr = [1, 2, 3, 4];
const output = move(arr, 1, -1);

console.log(`Original Array: ${arr}`);
console.log(`Array after the movement: ${output}`);
