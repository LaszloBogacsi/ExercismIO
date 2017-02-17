var bigInt = require('./big-integer');


function Grains() {

}

Grains.prototype.square = function (power) {
  var bigNum = bigInt(2).pow(power - 1);
  // console.log(bigNum);
  return bigNum.toString();
};

Grains.prototype.total = function () {
  var total = 0;
  for (var i = 1; i < 65; i++) {
    total = bigInt(total).add(this.square(i))
  };

  return total.toString();
};


module.exports = Grains;
