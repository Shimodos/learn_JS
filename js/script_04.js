"use strict";

let li = document.querySelectorAll("li");

// header.style.cssText = `
// color: red;
// background-color: yellow;
// `; // cssText - свойство, которое позволяет задать несколько стилей сразу

// header.classList.add("newClass"); // добавляет класс

// console.log(header.className); // возвращает строку с классами
// header.className = "newClass"; // перезаписывает классы

// console.log(getComputedStyle(header)); // возвращает стили элемента

// let styleOfHeader = getComputedStyle(li, "::before");
// console.log(styleOfHeader);

// console.log(parseInt(styleOfHeader.marginBottom)); // преобразует строку в число

for (let value of li) {
  value.classList.add("newClass");
}
