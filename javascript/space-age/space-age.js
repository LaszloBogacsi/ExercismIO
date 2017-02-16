function SpaceAge (seconds) {
  this.seconds = seconds;
  this.earthYearSeconds = convertToSeconds(365.25);
}

var convertToSeconds = function (days){
  let seconds = days * 24 * 60 * 60
  return seconds;
}

var roundToTwoDecimals = function (number) {
  return Math.round(number * 100) / 100;
}

SpaceAge.prototype.calculateAge = function (planetaryMultiplier) {
  var age = this.seconds / (this.earthYearSeconds * planetaryMultiplier);
  age = roundToTwoDecimals(age);
  return age;
};

SpaceAge.prototype.onEarth = function () {
  const multiplier = 1;
  var age = this.calculateAge(multiplier);
  return age;
};

SpaceAge.prototype.onMercury = function () {
  const multiplier = 0.2408467;
  var age = this.calculateAge(multiplier);
  return age;
};

SpaceAge.prototype.onVenus = function () {
  const multiplier = 0.61519726;
  var age = this.calculateAge(multiplier);
  return age;
};

SpaceAge.prototype.onMars = function () {
  const multiplier = 1.8808158;
  var age = this.calculateAge(multiplier);
  return age;
};

SpaceAge.prototype.onJupiter = function () {
  const multiplier = 11.862615;
  var age = this.calculateAge(multiplier);
  return age;
};

SpaceAge.prototype.onSaturn = function () {
  const multiplier = 29.447498;
  var age = this.calculateAge(multiplier);
  return age;
};

SpaceAge.prototype.onUranus = function () {
  const multiplier = 84.016846;
  var age = this.calculateAge(multiplier);
  return age;
};

SpaceAge.prototype.onNeptune = function () {
  const multiplier = 164.79132;
  var age = this.calculateAge(multiplier);
  age = roundToTwoDecimals(age);
  return age;
};









module.exports = SpaceAge;
