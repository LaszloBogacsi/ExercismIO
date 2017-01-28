
function Words () {

}

Words.prototype.count = function (words) {
  var wordCounts = {};
 words = words.toLowerCase()
              .replace(/[.,\/#!¡¿$%\^&\*;@:{}=\-_`~()]/g,' ') // all the punctuation with whitespace
              .replace(/'\B/g, ' ') // ignoring single-quotation at the back of the word
              .replace(/[\n\t?]/,' ') // replacing linefeed and tab charachter with whitespace
              .trim();
 var wordsArray = words.split(' '); // put the word in an array splitted at whitespace
console.log(wordsArray);
 wordsArray.map(function(word){
   word = word.replace(/^'/,'') // ignore the single-quotation at the start of the word.
   if (word in wordCounts && wordCounts.hasOwnProperty(word) ) {
     wordCounts[word] += 1;
   } else if (word !== '') {
     wordCounts[word] = 1;
   }
 });
 return wordCounts;
};

module.exports = Words;
