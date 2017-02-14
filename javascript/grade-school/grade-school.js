function School () {
  this.studentList = {}
}

var sorting = function(list){
  var keys = Object.keys(list.studentList);
  for(var i = 0; i < keys.length; i++){
    list.studentList[keys[i]].sort();
  };
};

School.prototype.roster = function () {
  return this.studentList;
};

School.prototype.add = function (name, grade) {
  if (!this.studentList[grade]) {
    this.studentList[grade] = [name]
  } else {
    this.studentList[grade].push(name)
  }
  sorting(this);
};

School.prototype.grade = function (grade) {
  if (!this.studentList[grade]){
    return [];
  }
  listOfNamesSorted = this.studentList[grade].sort();
  return listOfNamesSorted
};




module.exports = School;
