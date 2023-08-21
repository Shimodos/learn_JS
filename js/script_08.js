"use strict";

let apple = "smallApple";
let banana = "smallBanana";

const obj = {
  fruits: {
    apple: "apple",
    banana: "banana",
    orange: "orange",
    lemon: "lemon",
    watermelon: "watermelon",
  },
  drinks: {
    coffee: "coffee",
    tea: "tea",
    juice: "juice",
  },
};

function coctailMixer({ fruits: { apple, orange }, drinks: { juice } }) {
  console.log(`You have ${apple} and ${orange} ${juice}`);
}

coctailMixer(obj);
