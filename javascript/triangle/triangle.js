function Triangle(x, y, z) {
this.sides = [x, y, z];
}

var names = {
  1: 'scalene',
  2: 'isosceles',
  3: 'equilateral'};

var invalid = sides => {
  var hasNoSize = (sides.reduce((sum, side)=> sum + side, 0) === 0);
  var anyTwoSidesLessThanThird = (sides[0] + sides[1] < sides[2]
    || sides[0] + sides[2] < sides[1]
    || sides[1] + sides[2] < sides[0] );

  if (hasNoSize) {return true};
  if (anyTwoSidesLessThanThird) {return true};

  return false;
};

var numberOfEqualSides = sides => {
  var arrOfEqualSides = sides.map(oneSide => {
    return sides.filter(side => side === oneSide).length;
  });
  var numberOfEqualSides = Math.max(...arrOfEqualSides)
  return numberOfEqualSides;
}

Triangle.prototype.kind = function() {
  if (invalid(this.sides)) { throw new Error(); };
  return names[numberOfEqualSides(this.sides)];
};

module.exports = Triangle;
