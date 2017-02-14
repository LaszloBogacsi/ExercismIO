function ETL() {

}

ETL.prototype.transform = function (data) {
  var newData = {};
  var oldKeys = Object.keys(data);

  for (var i = 0; i < oldKeys.length; i++) {
    var newValue = Number(oldKeys[i]);
    var oldValues = data[oldKeys[i]];
    //  for multiple keys to value
    for (var j = 0; j < oldValues.length; j++) {
      var newKey = oldValues[j].toLowerCase()
      newData[newKey] = newValue;
    }
  }
  return newData;
};


module.exports = ETL;
