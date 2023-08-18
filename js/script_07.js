"use strict";

const arr = [
  "apple",
  "banana",
  "orange",
  "pear",
  "grape",
  "pineapple",
  "strawberry",
];

// let [fruitOne, fruitTwo, fruitThree] = arr;
//
// console.log(fruitOne);
// console.log(fruitTwo);
// // console.log(fruitThree);
//
// let a = fruitOne;
// fruitOne = fruitTwo;
// fruitTwo = a;
//
// console.log(fruitOne);
// console.log(fruitTwo);
//
// [fruitOne, fruitTwo] = [fruitTwo, fruitOne];
//
// console.log(fruitOne);
// console.log(fruitTwo);

function cocktailMaker([fruit1, fruit2, fruit3]) {
  console.log(`I made a cocktail with ${fruit1}, ${fruit2} and ${fruit3}`);
}

cocktailMaker(arr);
