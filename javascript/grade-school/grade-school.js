function School () {
  this.studentList = {}
}

School.prototype.roster = function () {

return this.studentList
};

module.exports = School;
