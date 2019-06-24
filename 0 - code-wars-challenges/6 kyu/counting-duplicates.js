/*
                                            Count the number of Duplicates

    Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

    Example
    "abcde" -> 0 # no characters repeats more than once
    "aabbcde" -> 2 # 'a' and 'b'
    "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
    "indivisibility" -> 1 # 'i' occurs six times
    "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
    "aA11" -> 2 # 'a' and '1'
    "ABBA" -> 2 # 'A' and 'B' each occur twice

*/

function duplicateCount(text) {
  charsCounted = []; //In this array will be save the characters that have been analized, this will avoid characters will count more than 1 time
  text = text.toLowerCase().split(""); // Using .split("") in a string it split each string characters in individual position... of this way the string turns into a char array!

  var numberOfCharsRepeated = 0;

  text.map(function(character) {
    if (!charsCounted.includes(character)) {
      charsCounted.push(character);
      var timesThisCharAppears = 0;
      text.map(function(searchingHowManyTimesThisCharAppears) {
        if (character === searchingHowManyTimesThisCharAppears)
          timesThisCharAppears++;
      });
      if (timesThisCharAppears >= 2) numberOfCharsRepeated++;
    }
  });
  return numberOfCharsRepeated;
}

console.log(duplicateCount("aabBcde"));

