"use strict";

const names = [
  "John",
  "Bob",
  "Barry",
  "Olga",
  "Ben",
  "Nancy",
  "Nancy",
  "Linda",
  "Linda",
];

const uniqueNames = new Set(names);
// uniqueNames.has("Linda");
console.log(...uniqueNames);

const name = "Alex";
const uniqueName = new Set(name);
console.log(uniqueName);

for (let value of uniqueNames) {
  console.log(value);
}

// const updatedNames = Array.from(uniqueNames);
// console.log(updatedNames);
