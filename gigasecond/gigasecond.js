function Gigasecond (inputDate) {
 this.inputDate = inputDate;
}


Gigasecond.prototype.date = function () {
  var milliSeconds = this.inputDate.getTime();
  var newDateMilliSeconds = milliSeconds + (1e9 * 1000);
  var gigaDate = new Date(0);
  gigaDate.setTime(newDateMilliSeconds);
  return gigaDate;
};

module.exports = Gigasecond;
