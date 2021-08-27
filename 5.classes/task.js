class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix = () => {
    this.state *= 1.5;
  };

  set state(value) {
    if (value < 0) {
      this._state = 0;
    } else if (value > 100) {
      this._state = 100;
    } else this._state = value;
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook = (book) => {
    if (book.state > 30) this.books.push(book);
  };

  findBookBy = (type, value) => {
    const book = this.books.find((book) => book[type] == value);
    if (!book) return null;
    return book;
  };

  giveBookByName = (bookName) => {
    const bookIndex = this.books.findIndex((book) => book.name == bookName);
    if (bookIndex == -1) return null;
    const book = this.books[bookIndex];
    this.books.splice(bookIndex, 1);
    return book;
  };
}

const library = new Library("Библиотека имени Ленина");

library.addBook(
  new Book(
    "Государство и революция. Учение марксизма о государстве и задачи пролетариата в революции",
    "В. И. Ленин",
    1918,
    412
  )
);

library.addBook(new Magazine("Der Adler", 1939, 28));

library.addBook(new NovelBook("Рюноскэ Акутагава", "Ведьма", 1919, 200));

let book = library.findBookBy("Ведьма", 2019);
book = library.giveBookByName("Ведьма");
book.state = 20;
book.state = 70;
library.addBook(book);

class Student {
  constructor(name) {
    this.name = name;
    this.subjects = {};
  }

  addMark = (mark, subject) => {
    if (mark < 0 || mark > 5) {
      console.log("Ошибка, оценка должна быть числом от 1 до 5");
      return;
    }
    if (!this.subjects[subject]) {
      this.subjects[subject] = [];
      this.subjects[subject].push(mark);
    } else {
      this.subjects[subject].push(mark);
    }
  };

  getAverageBySubject = (subject) => {
    if (!this.subjects[subject]) return
    const sum = this.subjects[subject].reduce((acc, curr) => acc + curr, 0);
    return sum / this.subjects[subject].length;
  };

  getAverage = () => {
    let marks = [];
    for (const mark of Object.values(this.subjects)) {
      marks = marks.concat(mark);
    }
    let sum = marks.reduce((acc, curr) => acc + curr, 0);
    return sum / marks.length;
  };

  exclude(reason) {
    this.excluded = reason;
    delete this.marks;
    delete this.subject;
  }
}

let student = new Student("adf");

student.addMark(5, "algebra");
student.addMark(5, "algebra");
student.addMark(5, "geometry");
student.addMark(4, "geometry");
student.addMark(6, "geometry");
console.log(student.getAverageBySubject("geometry"));
student.getAverageBySubject("biology");
student.exclude("Исключен за попытку подделать оценки");

console.log(student.getAverage());
