"use strict";

const ul = document.querySelector("ul");

const qeAll = document.querySelectorAll("li");
const getAlemntByAll = document.getElementsByTagName("li");

console.log(qeAll);
console.log(getAlemntByAll);

const newLi = document.createElement("li");
newLi.textContent = "item 4";
ul.append(newLi);

console.log(qeAll);
console.log(getAlemntByAll);

for (let i = 0; i < getAlemntByAll.length; i++) {
  getAlemntByAll[i].style.color = "red";
} // Статичная коллекция

for (let i = 0; i < qeAll.length; i++) {
  qeAll[i].style.color = "blue";
} // Динамичная коллекция
