/*
You've just finished writing the last chapter for your novel when a virus suddenly infects your document. It has swapped the 'i's and 'e's in 'ei' words and capitalised random letters. Write a function which will:

a) remove the spelling errors in 'ei' words. (Example of 'ei' words: their, caffeine, deceive, weight)

b) only capitalise the first letter of each sentence. Make sure the rest of the sentence is in lower case.

Example: He haD iEght ShOTs of CAffIEne. --> He had eight shots of caffeine.

*/

function proofread(str) {
  str = str
    .split(" ")
    .map((word, index) => {
      if (index !== 0) return word.toLowerCase();
      else {
        word = word.toLowerCase();
        word = word.split("");
        word[0] = word[0].toUpperCase();
        return word.join("");
      }
    })
    .map(word => {
      word.split("").forEach((letter, index, array) => {
        if (letter === "i" && word[index + 1] === "e") {
          word = word.split("");
          word[index] = "e";
          word[index + 1] = "i";
          word = word.join("");
        }
      });
      return word;
    });
  return str.join(" ");

}

console.log(proofread("ThiEr DEcIEt wAs INconcIEVablE. sHe SIeZeD thE moMENT."));
