function BeerSong() {

}

var start = 'bottles of beer on the wall'

var verses = function (numberOfVerse){

  var verse =
  {
    nBottles : `${numberOfVerse} bottles of beer on the wall, ${numberOfVerse} bottles of beer.\nTake one down and pass it around, ${numberOfVerse - 1} bottles of beer on the wall.\n`,

    twoBottles : `${numberOfVerse} bottles of beer on the wall, ${numberOfVerse} bottles of beer.\nTake one down and pass it around, ${numberOfVerse - 1} bottle of beer on the wall.\n`,

    oneBottle : `${numberOfVerse} bottle of beer on the wall, ${numberOfVerse} bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n`,

    noBottle : 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n'
  }

  return verse;
};



BeerSong.prototype.verse = function (numberOfVerse) {

  if (numberOfVerse > 2) {
    return verses(numberOfVerse).nBottles;
  } else if (numberOfVerse === 2) {
    return verses(numberOfVerse).twoBottles;
  } else  if (numberOfVerse === 1) {
    return verses(numberOfVerse).oneBottle;
  } else {
    return verses(numberOfVerse).noBottle;
  }

};

BeerSong.prototype.sing = function (from, to = 0) {
  var song = '';
  for(i = from; i >= to; i--){
    song += verses(i).nBottles + '\n';
  }
  return song;
};

module.exports = BeerSong;
