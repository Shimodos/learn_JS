"use strict";

const obj = {
  fruits: ["apple", "banana", "orange", "lemon", "watermelon"],
  drinks: ["coffee", "tea", "juice"],
};

console.log(...obj.fruits);

const newFruits = [...obj.fruits, ...obj.drinks, "grapefruit"];
console.log(newFruits);

function coctailMixer(drink, ing1, ing2) {
  console.log(`You have ${drink} ${ing1} eng ${ing2}`);
}

coctailMixer("tea", ...obj.fruits);
