function Robot(){
this.name;
this.newName();
}

var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var robotNames = [];
Robot.prototype.newName = function () {
  newName = '';
  for (var i = 0; i < 2; i++){
    newName += alphabet[Math.floor(Math.random()*(26+1))]
  }
  for (var i = 0; i < 3; i++) {
    newName += Math.floor(Math.random()*4)
  }
  robotNames.push(newName);
  this.name = newName;

  return newName;
}


module.exports = Robot;
