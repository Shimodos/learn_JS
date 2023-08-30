"use strict";

const arr1 = ["a", "b", "c", "d", "e"];

//Slice
console.log(arr1.slice(2, 4)); // ["c", "d"]
console.log(arr1.slice(-2)); // ["d", "e"]
const arr2 = arr1.slice(0);
console.log(arr2); // ["a", "b", "c", "d", "e"]

//Reverse
const arr3 = ["j", "i", "h", "g", "f"];
console.log(arr3.reverse()); // ["f", "g", "h", "i", "j"]

//Concat
const arr4 = ["a", "b", "c", "d", "e"];
const arr5 = ["j", "i", "h", "g", "f"];

console.log(arr4.concat(arr5)); // ["a", "b", "c", "d", "e", "j", "i", "h", "g", "f"]
console.log([...arr4, ...arr5]); // ["a", "b", "c", "d", "e", "j", "i", "h", "g", "f"]

//forEach
const arr6 = ["a", "b", "c", "d", "e"];

for (let [value, key] of arr6.entries()) {
  console.log(key, value);
}

arr6.forEach((element, key, arr) => console.log(key, element, arr)); // a b c d e

//Map

const map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

map.forEach(function (value, key, map) {
  console.log(key, value, map);
});

//Set
const set = new Set(map);

set.forEach(function (value, key, set) {
  console.log(key, value, set);
});
