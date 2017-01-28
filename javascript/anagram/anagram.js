function Anagram(word) {
  this.word = word.toLowerCase();
}

Anagram.prototype.matches = function (wordsArr) {
  var word = this.word;
  var wordsArr = wordsArr;
  anagrams = [];
  if (typeof arguments[0] == 'string') {
    wordsArr = Array.from(arguments);
  }
  for (var i = 0; i < wordsArr.length; i++){
    var possibleWord = wordsArr[i].toLowerCase();
    if (wordsArr[i].length === word.length && possibleWord !== this.word){
      for (var j = 0; j < word.length; j++){
        if (possibleWord.includes(word[j])){
          possibleWord = possibleWord.replace(word[j], '')
          if (possibleWord === ''){
            anagrams.push(wordsArr[i]);
          }
        }
      }
    }
  }
  return anagrams;
};


module.exports = Anagram;
