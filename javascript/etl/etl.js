function ETL() {

}

ETL.prototype.transform = function (data) {
  var newData = {};
  var value = Number(Object.keys(data)[0]);
  var newKey = data[Object.keys(data)[0]][0].toLowerCase()

  newData[newKey] = value;

  return newData;
};


module.exports = ETL;
