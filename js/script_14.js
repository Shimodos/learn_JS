"use strict";
const bookings = [];
function createBooking(
  flightNum,
  numPassengers = 1,
  price = 100 * numPassengers,
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
}

createBooking("FD7FV", 5);

const flight = "LH234";
const passenger = {
  name: "Jonas Schmedtmann",
  passport: 24739479284,
};

function checkIn(flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;
  if (passenger.passport === 24739479284) {
    // alert("Check in");
    console.log("Check in");
  } else {
    // alert("Wrong passport!");
    console.log("Wrong passport!");
  }
}

function newPassport(person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
}

newPassport(passenger);
checkIn(flight, passenger);
// console.log(flight);
// console.log(passenger.name);

// функции  первого класса

function oneWord(str) {
  return str.replaceAll(/ /g, "").toLowerCase();
}

console.log(oneWord("Hello world This is a test"));

function upperFirstWord(str) {
  const [first, ...others] = str.split(" ");
  return [first[0].toUpperCase() + first.slice(1), ...others].join(" ");
}

console.log(upperFirstWord("hello world This is a test"));

// функции высшего порядка ,

function transformer(str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
}

transformer("javaScript is the best!", upperFirstWord);
transformer("javaScript is the best!", oneWord);

// функции возврощающие функции

function greet(greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
}

const greeterHey = greet("Hey");
greeterHey("Jonas");

greet("Hello")("Jonas");
