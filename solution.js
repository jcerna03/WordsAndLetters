const words = ["kellogg", "go", "hola", "lego", "hug", "kocomo", "hello"];
const letters = ["a", "h", "l", "e", "l", "o", "g", "k"];
const filterwords = [];
let letters_map = []
let validator = 0;
let longestCount = 0;

for (let word of words) {
  validator = 0 
  letters_map = letters.map(x => x) 
  for (let word_letter of word.split("")) {
    for (let [i, letter] of letters_map.entries()) {
      if (word_letter === letter) {
        letters_map.splice(i,1)
        validator++;
        break;
      }
    }
    if (validator === word.length) {
      filterwords.push(word);
    }
  }
}
for (const word of filterwords) {
  if (word.length > longestCount) {
    longestCount = word.length;
  }
}
console.log(longestCount)
