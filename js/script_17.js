"use strict";

console.log(Number.parseInt("30px")); // 30
console.log(Number.parseFloat("30.233px")); // 30.233

console.log(Math.max(1122, 43434)); // 43434
console.log(Math.min(1122, 43434)); // 1122

const calcRandom = (min, max) => {
  return Math.trunc(Math.random() * (max - min) + 1) + min; // случайное число от min до max
};

console.log(calcRandom(1, 10));

console.log(Math.round(2.6)); // округление до ближайшего целого

console.log(+(23.443434).toFixed(2)); // 23.44 toFixed возвращает строку
