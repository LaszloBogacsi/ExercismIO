function School () {
  this.studentList = {}
}

School.prototype.roster = function () {

return this.studentList
};

School.prototype.add = function (name, grade) {

this.studentList[grade] = [name]
};

module.exports = School;
