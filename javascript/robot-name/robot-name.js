function Robot(){
this.name;
this.newName();
}

var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var robotNames = [];
Robot.prototype.newName = function () {
  newName = '';
  for (var i = 0; i < 2; i++){
    var randomNumber = Math.floor(Math.random()*26)
    newName += alphabet[randomNumber]
  }
  for (var i = 0; i < 3; i++) {
    newName += Math.floor(Math.random()*4)
  }
  if (robotNames.includes(newName)){
    this.newName();
  }
  robotNames.push(newName);
  this.name = newName;
}


Robot.prototype.reset = function () {
  this.newName();
};

module.exports = Robot;
