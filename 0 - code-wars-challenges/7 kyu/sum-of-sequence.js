/*
    Your task is to make function, which returns the sum of a sequence of integers.

    The sequence is defined by 3 non-negative values: begin, end, step.

    If begin value is greater than the end, function should returns 0

    Examples

    sequenceSum(2,2,2) === 2
    sequenceSum(2,6,2) === 12 // 2 + 4 + 6
*/

const sequenceSum = (begin, end, step) => {
  if (begin > end) return 0;
  else {
    var sum = begin;
    while (begin + step <= end) {
      begin += step;
      sum += begin;
      console.log("Begin: " + begin);
    }
    return sum;
  }
};

console.log(sequenceSum(1, 5, 1));
