function Anagram(word) {
  this.word = word;
}

Anagram.prototype.matches = function (wordsArr) {
  var word = this.word;
  anagrams = [];
  for (var i = 0; i < wordsArr.length; i++){
    if (wordsArr[i].length === word.length){
      for (var j = 0; j < word.length; j++){
        if (!wordsArr[i].includes(word[j])){
          j = word.length;
          break;
        } else if (j === word.length - 1) {
          anagrams.push(wordsArr[i])

        }
        console.log(wordsArr[i]);
        // console.log(wordsArr[i].indexAt(j));
      }
    }
  }
  return anagrams;
};


module.exports = Anagram;
