var bigInt = require('./big-integer');


function Grains() {

}

Grains.prototype.square = function (power) {
  var bigNum = bigInt(2).pow(power - 1);
  console.log(bigNum);
  return bigNum.toString();
};


module.exports = Grains;
