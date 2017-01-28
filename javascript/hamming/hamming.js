function Hamming (){

}

function isDNALengthEqual (dna1, dna2) {
  var lengthErrorMsg = "DNA strands must be of equal length.";
  if(dna1.length != dna2.length) throw new Error(lengthErrorMsg);
  return true;
}



function calculateHammingDistance (dna1, dna2) {
  var hammingDistance = 0;
  return hammingDistance ? (dna1 === dna2) : dnaNotEqual();

  function dnaNotEqual() {
    var dnaArray1 = dna1.split('');
    var dnaArray2 = dna2.split('');
    for(var i = 0; i < dnaArray1.length; i++) {
      if (dnaArray1[i] != dnaArray2[i]){
        hammingDistance += 1;
      }
    }
    return hammingDistance;
  }
}


Hamming.prototype.compute = function (seq1, seq2) {
  if (isDNALengthEqual(seq1, seq2)){
    var hammingDistance = calculateHammingDistance(seq1, seq2);
    return hammingDistance;
  }
};

module.exports = Hamming;
