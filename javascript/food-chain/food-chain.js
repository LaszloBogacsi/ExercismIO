function FoodChain (){
}

FoodChain.prototype.verse = function (numberOfVerse) {
  return lyrics(numberOfVerse + 2);
};

var song = "";
var lyrics = function (n){
  if (n === 1) {
    console.log(song);
    return;
  };
  var lines = {
    1: "\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n",
    2: "I know an old lady who swallowed a fly."
  };
  song = song + (lines[n-1]);
  console.log(Object.keys(lines).length)
  lyrics(n-1);
  return song;
};

module.exports = FoodChain;
