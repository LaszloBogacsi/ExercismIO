function PhoneNumber(phoneNumber) {
  this.phoneNumber = phoneNumber;
}

PhoneNumber.prototype.number = function () {
  var number = this.phoneNumber;
  var strippedNumber = number.replace(/[^0-9]/g,'');
  var firstNumber = strippedNumber.charAt(0);
  var invalid = '0000000000';

  if (strippedNumber.length < 10){
    return invalid;
  }
  if (strippedNumber.length === 11) {
    if (firstNumber === '1') {
      return strippedNumber.slice(1);
    }
    return invalid;
  }
  return strippedNumber;
};

PhoneNumber.prototype.areaCode = function () {
  var number = this.number();
  var areaCode = number.slice(0,3);

  return areaCode;
};

PhoneNumber.prototype.toString = function () {
  var number = this.number();
  var pattern = /(\d{3})(\d{3})(\d{4})/;
  var formattedNumber = number.replace(pattern, "($1) $2-$3")

  return formattedNumber;
};

module.exports = PhoneNumber;
