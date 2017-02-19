function Triangle(x, y, z) {
this.sides = [x, y, z];
}


var invalid = function(sides) {
  var hasNoSize = (sides.reduce((sum, side)=>{ return sum + side}, 0) === 0);
  if (hasNoSize) {return true};

  var anyTwoSidesLessThanThird = (sides[0] + sides[1] < sides[2] || sides[0] + sides[2] < sides[1] || sides[1] + sides[2] < sides[0] );
  if (anyTwoSidesLessThanThird) {return true} else {return false};

}

var names = {
  1: 'scalene',
  2: 'isosceles',
  3: 'equilateral'}

var numberOfEqualSides = function(sides){
  var arrOfEqualSides = sides.map(function(oneSide){
    return sides.filter(function(side){
      return side === oneSide
    }).length;
  });
  var numberOfEqualSides = Math.max(...arrOfEqualSides)
  return numberOfEqualSides;
}

Triangle.prototype.kind = function () {
  if (invalid(this.sides)) {
    throw new Error();
  }

  return names[numberOfEqualSides(this.sides)];

};

module.exports = Triangle;
