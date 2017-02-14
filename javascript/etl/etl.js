function ETL() {

}

ETL.prototype.transform = function (data) {
  var newData = {};
  var newValue = Number(Object.keys(data)[0]);
  var array = data[Object.keys(data)[0]];

  for (var i = 0; i < array.length; i++) {
    var newKey = array[i].toLowerCase()
    newData[newKey] = newValue;
  }

  return newData;
};


module.exports = ETL;
