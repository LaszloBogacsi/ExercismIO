function BeerSong() {

}

var start = 'bottles of beer on the wall'

BeerSong.prototype.verse = function (numberOfVerse) {
  var oneVerse = `${numberOfVerse} bottles of beer on the wall, ${numberOfVerse} bottles of beer.\nTake one down and pass it around, ${numberOfVerse - 1} bottles of beer on the wall.\n`

  return oneVerse;
};

module.exports = BeerSong;
