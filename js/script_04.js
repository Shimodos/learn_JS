"use strict";

let elem = document.querySelector("h1");

// console.log(elem.innerHTML);

// let oldData = elem.innerHTML;

elem.outerHTML = `<p>Hello World! -tram pam pam</p>`; // замена элемента

console.log(elem.firstChild); // получение первого дочернего элемента

elem.firstChild.data = "New Comments"; // изменение текста
