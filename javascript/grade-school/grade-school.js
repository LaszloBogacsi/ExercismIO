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

module.exports = School;
