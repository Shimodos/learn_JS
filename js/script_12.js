"use strict";

const airPlane = new String("Airbus A320 Neo");
console.log(airPlane.slice(-2));

const plane = "D430";
const chekSeat = function (seat) {
  const s = seat.slice(0, 1);
  if (s === "B" || s === "E") {
    console.log("You got the middle seat");
  } else {
    console.log("You got lucky");
  }
};

chekSeat("A546");
