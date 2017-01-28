function DnaTranscriber () {

}

DnaTranscriber.prototype.toRna = function (rna) {
  // rna = rna.split('');
  for(var i = 0; i < rna.length; i++){
    rna[i] = substitution[rna[i]];
  }
  // rna = rna.join('');
  return rna;
};

var substitution = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U'
}

module.exports = DnaTranscriber;
