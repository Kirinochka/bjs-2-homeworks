function Student(name, gender, age) {
  // Ваш код
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  //ваш код
  this.subject = subjectName;
};

// ваш код для остальных методов

Student.prototype.addMark = function (mark) {
  if (this.marks == undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
};

Student.prototype.addMarks = function (...mark) {
  if (this.marks == undefined) {
    this.marks = [...mark];
  } else {
    this.marks.push(...mark);
  }
};

Student.prototype.getAverage = function () {
  return this.marks.reduce((acc, cur) => acc + cur, 0) / this.marks.length;
};

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.marks;
  delete this.subject;
};
