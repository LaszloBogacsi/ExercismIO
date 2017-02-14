function School () {
  this.studentList = {}
}

School.prototype.roster = function () {

return this.studentList
};

School.prototype.add = function (name, grade) {
  if (!this.studentList[grade]) {
    this.studentList[grade] = [name]
  } else {
    this.studentList[grade].push(name)
  }
};

School.prototype.grade = function (grade) {
  listOfNamesSorted = this.studentList[grade].sort()
  return listOfNamesSorted
};


module.exports = School;
