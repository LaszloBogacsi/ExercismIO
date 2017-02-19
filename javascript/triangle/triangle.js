function Triangle(x, y, z) {
this.x = x;
this.y = y;
this.z = z;
this.sides = [x, y, z];
}


var invalid = function(sides) {
  if (sides.reduce(function(sum, side){
    return sum + side;
  }, 0) === 0){
    return true;
  }
  if(sides[0] + sides[1] < sides[2] || sides[0] + sides[2] < sides[1] || sides[1] + sides[2] < sides[0] ) {
    return true;
  } else {
    return false;
  }
}

var hasTwoEqual = function (sides) {
  arr = sides.sort();
  if (hasAllEqualSides(sides) != true && arr[0] == arr[1] && arr[0] != arr[2] || arr[0] != arr[1] && arr[1] == arr[2] ){
    return true;
  } else {
    return false;
  }
};

var hasAllEqualSides = function (sides) {
  if (sides[0] == sides[1] && sides[0] == sides[2] && sides[1] == sides[2]) {
    return true;
  } else {
    return false;
  }
};
var hasNoEqualSides = function (sides) {
  if (sides[0] != sides[1] && sides[0] != sides[2] && sides[1] != sides[2]) {
    return true;
  } else {
    return false;
  }
};

Triangle.prototype.kind = function () {
  if (invalid(this.sides)) {
    throw new Error();
  }
  if (hasAllEqualSides(this.sides)) {
    return 'equilateral'
   }
  if (hasTwoEqual(this.sides)) {
    return 'isosceles';
  };
  if (hasNoEqualSides(this.sides)){
    return 'scalene';
  }

};

module.exports = Triangle;
