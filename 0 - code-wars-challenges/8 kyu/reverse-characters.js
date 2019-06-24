function reverseCharacters(str) {
  var newWord = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newWord += str[i];
  }
  return newWord;
}

console.log(reverseCharacters("hello world!"));
