"use strict";
// Метод call() вызывает функцию с указанным значением this и индивидуально предоставленными аргументами.
// function person(greatStr) {
//   console.log(greatStr + " ", this.firstName + " " + this.lastName);
// }
//
// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
// };
// const person2 = {
//   firstName: "Mary",
//   lastName: "Doe",
// };
//
// person.call(person2, "Hello,");
//
// const s7 = {
//   airLine: "Turkish Airlines",
//   iCode: "TK",
//   booking: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airLine} flight ${this.iCode}${flightNum}`,
//     );
//     this.booking.push({ flight: `${this.iCode}${flightNum}`, name });
//   },
// };
//
// s7.book(239, "John Smith");
//
// const book = s7.book;
//
// const eurowings = {
//   airLine: "Eurowings",
//   iCode: "EW",
//   booking: [],
// };
//
// book.call(eurowings, 23, "Sarah Williams");

// Метод Bind - создает копию функции с привязанным контекстом и аргументами.

const s7 = {
  airLine: "Turkish Airlines",
  iCode: "TK",
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airLine} flight ${this.iCode}${flightNum}`,
    );
    this.booking.push({ flight: `${this.iCode}${flightNum}`, name });
  },
};

s7.book(239, "John Smith");

const book = s7.book;

const eurowings = {
  airLine: "Eurowings",
  iCode: "EW",
  booking: [],
};

book.call(eurowings, 23, "Sarah Williams");

const bookEW = book.bind(eurowings);

bookEW(43, "Steven Williams");

eurowings.planes = 300;
eurowings.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(".btn")
  .addEventListener("click", eurowings.buyPlane.bind(eurowings));
