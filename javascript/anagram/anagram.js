function Anagram(word) {
  this.word = word.toLowerCase();
}


var sortLetters = function(word) {
  return word.split('').sort().join('')
}

var hasSameLetters = function(word1, word2){
  return sortLetters(word1) === sortLetters(word2);
}

var isEqualLengthAndNotSame = function(word1, word2) {
  return word1.length === word2.length && word1 !== word2;
}

Anagram.prototype.matches = function (wordsArr) {
  anagrams = [];
  var that = this
  if (typeof arguments[0] !== 'object') { wordsArr = Array.from(arguments); }

  wordsArr.map(function(match){
    var possibleMatch = match.toLowerCase();
    if (isEqualLengthAndNotSame(possibleMatch, that.word) && hasSameLetters(possibleMatch, that.word)){
      anagrams.push(match);
    }
  });

  return anagrams;
};


module.exports = Anagram;
