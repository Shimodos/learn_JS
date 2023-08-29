"use strict";

// const airPlane = new String("Airbus A320 Neo");
// console.log(airPlane.slice(-2));
//
// const plane = "D430";
// const chekSeat = function (seat) {
//   const s = seat.slice(0, 1);
//   if (s === "B" || s === "E") {
//     console.log("You got the middle seat");
//   } else {
//     console.log("You got lucky");
//   }
// };
//
// chekSeat("A546");

const airplane = "   Airbus A320 Neo";
console.log(airplane.toLowerCase());
console.log(airplane.toUpperCase());

console.log(airplane.trim()); // remove white space from both side

const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

const str = "Hello world";
console.log(str.replace("world", "javascript"));

const flight = "FD7FV";
console.log(flight.includes("FD"));
console.log(flight.startsWith("FD"));
console.log(flight.endsWith("FV"));

const newNames = "jonas schmedtmann john smith steven williams";
const arrFromStr = newNames.split(" "); // split string into array
console.log(arrFromStr);
const strFromArr = arrFromStr.join(", "); // join array into string
console.log(strFromArr);

function capitalName(strNames) {
  const arrNames = strNames.split(" "); // split string into array
  const arrNamesUpper = []; // create new array

  for (const name of arrNames) {
    arrNamesUpper.push(name[0].toUpperCase() + name.slice(1));
  }
  console.log(arrNamesUpper.join(" ")); // join array into string
}
capitalName("jonas schmedtmann john smith steven williams");

const cardNumber = 4532 + "";
console.log(cardNumber.padStart(16, "*")); // padStart()
console.log(cardNumber.padEnd(16, "*")); // padEnd()

const hello = "Hello" + " ";
console.log(hello.repeat(5)); // repeat string
