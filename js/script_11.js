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

// const hotel = new Map();
// hotel.set("name", ["Resort Hotel", "Alex", "Motel"]);
// hotel.set("true", "open");
// hotel.set("false", "close");
// const arr = [1, 2, 3];
// hotel.set(arr, "number");
//
// console.log(hotel.has("name"));

// конвертация стуктуры данных

const hotel = new Map([
  ["categories", ["Resort Hotel", "Alex", "Motel"]],
  [true, "open"],
  [false, "close"],
]);
console.log(hotel);

for (let [key, value] of hotel) {
  console.log(`Key: ${key} - value: ${value}`);
}

const obj = {
  name: "Alex",
  lastName: "K",
  age: 25,
};

// const mapFromObj = new Map(Object.entries(obj));
// console.log(mapFromObj); // Map(3) {"name" => "Alex", "lastName" => "K", "age" => 25}
//
// const setFromObj = new Set(Object.entries(obj));
// console.log(setFromObj); // Set(3) {Array(2), Array(2), Array(2)}
//
// const arrFromMap = Array.from(hotel);
// console.log(arrFromMap); // (3) [Array(2), Array(2), Array(2)]

// const arrFromObj = Object.entries(obj);
// console.log(arrFromObj);
//
// const objFromArr = Object.fromEntries(arrFrromObj);
// console.log(objFromArr);

// const arr = [1, 2, 3];
// const objFromArr = Object.fromEntries(arr);
// console.log(objFromArr); // {1: undefined, 2: undefined, 3: undefined}
