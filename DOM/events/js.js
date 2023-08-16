"use strict";

const elem = document.querySelector(".box_1");
const audio = new Audio("audio/Mountain Audio - Menu Click.mp3");

const elems = document.querySelectorAll(".boxes__box");

elems.forEach((value) => {
  value.addEventListener("click", () => {
    value.classList.add("newStyle");
    audio.play();
  });
}); // forEach

// for (let value of elems) {
//   value.addEventListener("click", () => {
//     value.classList.add("newStyle");
//     audio.play();
//   });
// } // for of

// elem.addEventListener("click", () => {
//   elem.classList.add("newStyle");
//   audio.play();
// });

// function newFunction() {
//   elem.classList.add("newStyle");
// }
