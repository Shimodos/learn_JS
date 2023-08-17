"use strict";
/*
ЗАДАЧА:
Создайте игру "Собери алфавит"

ПОДСКАЗКИ:

1-Не думайте о сокращении кода. Если будет очень много повторений однотипного кода - это нормально. Первая задача понимать логику языка, а только после оптимизировать его.
2-Помните про методы переноса элемента из одного места в другое(before, after и т.д.)
3-Помните про свойства, получения соседних элементов (previousElementSibling, previousElementSibling и т.д)

*/

// Получение элементов
const letters = document.querySelectorAll(".boxes__box");
const audioClick = new Audio("audio/Mountain Audio - Menu Click.mp3");
const audioWin = new Audio("audio/huge win.wav");
let newLetters = [];

// Событие при нажатии на кнопку

letters.forEach((letter) => {
  letter.addEventListener("click", () => {
    if (letter.previousElementSibling != null) {
      letter.previousElementSibling.before(letter);
      audioClick.play();
      newLetters = document.querySelectorAll(".boxes__box");

      console.log(newLetters);
    } else if (letter.nextElementSibling != null) {
      letter.nextElementSibling.after(letter);
      audioClick.play();
      newLetters = document.querySelectorAll(".boxes__box");

      console.log(newLetters);
    }
    if (
      newLetters[0].classList.contains("box_a") &&
      newLetters[1].classList.contains("box_b") &&
      newLetters[2].classList.contains("box_c") &&
      newLetters[3].classList.contains("box_d") &&
      newLetters[4].classList.contains("box_e") &&
      newLetters[5].classList.contains("box_f")
    ) {
      audioWin.play();
      // alert("Поздравляем! Вы собрали алфавит!");
    }
  });
});
