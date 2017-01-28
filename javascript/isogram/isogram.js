
function Isogram(word) {
  this.word = word;
}

var strip = function (word) {
  return word.toLowerCase().replace(/[-\s]/g, '');
};

Isogram.prototype.isIsogram = function () {
  let i;
  const word = this.word;
  const wordForCheck = strip(word);
  const check = [];

  for (i = 0; i < wordForCheck.length; i += 1) {
    if (check.includes(wordForCheck[i])) {
      return false;
    }
    check.push(wordForCheck[i]);
  }
  return true;
};

module.exports = Isogram;
