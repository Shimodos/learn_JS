"use strict";

// const userArr = ["John", 30, "value", "Khanh"];
//
// // userArr.push("Pete"); // ["John", 30, "Pete"]
// // userArr.unshift(10); // [10, "John", 30, "Pete"]
// // userArr.pop(); // [10, "John", 30]
// // userArr.shift(); // ["John", 30]
//
// // delete userArr[1]; // ["John", undefined, "value", "Khanh"]
// // userArr.splice(1, 1); // ["John", "value", "Khanh"]
// // userArr.splice(1, 2, 40, "Mary"); // ["John", 40, "Mary", "Khanh"]
//
// // const dataFromUserArr = userArr.splice(1, 2); // ["John", "Khanh"]
//
// userArr.includes("John"); // true
// userArr.indexOf("John"); // 0
// console.log(userArr);
// // console.log(dataFromUserArr);

//Циклы

// for (let i = 1; i < 10; i++) {
//   if (i <= 4 && i > 1) {
//     console.log(`раза ${i}`);
//   } else {
//     console.log(`раз ${i}`);
//   }
// }

// const arr = [
//   "John",
//   "Travolta",
//   2023 - 1980,
//   "Kharkiv",
//   true,
//   ["Khanh", "Mary", "Pete"],
//   false,
// ];

// const arr2 = [];
//
// for (let i = 0; i < arr.length; i++) {
//   console.log(typeof arr[i]);
//   arr2.push(typeof arr[i]);
// }
// console.log(arr2);

//continue
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] !== "string") continue;
//   console.log(arr[i]);
// }

//break
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "number") break;
//   console.log(arr[i]);
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let i = 15;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

let someNum = Math.floor(Math.random() * 10) + 1;
console.log(someNum);

while (someNum !== 10) {
  console.log(`you type ${someNum}`);
  someNum = Math.floor(Math.random() * 10) + 1;
  if (someNum === 10) {
    console.log(`you wine ${someNum}`);
    break;
  }
}
