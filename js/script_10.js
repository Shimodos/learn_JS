"use strict";

// spread operator

const obj = {
  fruits: ["apple", "banana", "orange", "lemon", "watermelon"],
  drinks: ["coffee", "tea", "juice"],
  food: {
    soup: "borsch",
    salad: "olivie",
  },
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [a, b, c, ...rest] = arr;

console.log(a, b, c, rest);

function calc(a, b, c, ...rest) {
  let sum = 0;
  for (let value of rest) {
    sum += value;
  }
  console.log(a, b, c);
  console.log(sum);
}

calc(1, 2, 3, 4, 5, 6, 7, 8, 9);
