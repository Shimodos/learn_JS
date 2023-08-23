"use strict";

// set - коллекция уникальных значений

// const names = [
//   "John",
//   "Bob",
//   "Barry",
//   "Olga",
//   "Ben",
//   "Nancy",
//   "Nancy",
//   "Linda",
//   "Linda",
// ];
//
// const uniqueNames = new Set(names);
// // uniqueNames.has("Linda");
// console.log(...uniqueNames);
//
// const name = "Alex";
// const uniqueName = new Set(name);
// console.log(uniqueName);
//
// for (let value of uniqueNames) {
//   console.log(value);
// }

// const updatedNames = Array.from(uniqueNames);
// console.log(updatedNames);

// map - коллекция ключ-значение

const hotel = new Map();
hotel.set("name", ["Resort Hotel", "Alex", "Motel"]);
hotel.set("true", "open");
hotel.set("false", "close");
const arr = [1, 2, 3];
hotel.set(arr, "number");

console.log(hotel.has("name"));
