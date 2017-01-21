function Pangram (sentence) {
  this.sentence = sentence;
}

var strip = function (sentence) {
  return sentence.toLowerCase().replace(/[^a-z]/g, '')
};
var alphabet = {
    'ascii' : 'abcdefghijklmnopqrstuvwxyz'
}
Pangram.prototype.isPangram = function () {
  let sentence = this.sentence;
  let sentenceToCheck = strip(sentence);
  var i;
  for (i = 0; i < alphabet['ascii'].length; i++){
    if (!sentenceToCheck.includes(alphabet['ascii'][i])){
      return false;
    }
  }
  return true;
};

module.exports = Pangram;
