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

// bigint

console.log(2 ** 53 - 1); // 9007199254740991
console.log(typeof 12312123123143534564756758678678n);

// Dates

const date = new Date(2025, 5, 31, 17, 30, 10, 688);

date.setFullYear(2040);

console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());

console.log(date.getTime()); // количество миллисекунд с 1 января 1970 года

const dateByMilliseconds = new Date(8622470210688);
console.log(dateByMilliseconds.toISOString()); // 2040-06-31T14:30:10.688Z
