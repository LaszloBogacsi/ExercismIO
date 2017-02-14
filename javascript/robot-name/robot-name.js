function Robot(){
this.name = newName();
}

var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var robotNames = [];
var newName = function (){
  newName = '';
  for (var i = 0; i < 2; i++){
    newName += alphabet[Math.floor(Math.random()*(26+1))]
  }
  for (var i = 0; i < 3; i++) {
    newName += Math.floor(Math.random()*4)
  }
  robotNames.push(newName);
  return newName;
}


module.exports = Robot;
