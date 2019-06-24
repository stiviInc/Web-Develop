function reverseWords(str) {
  var str = str.split(" ");
  var newWord = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newWord += str[i] + " ";
  }
  return newWord.substring(0,newWord.length-1);
}

console.log(reverseWords("Hello world!"));
