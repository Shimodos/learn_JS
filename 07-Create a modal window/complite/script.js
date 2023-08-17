"use strict";

/* 
ЗАДАЧА:
Создайте функционал для открытия модальных окон.


ПОДСКАЗКА:
1-Не забывайте про свойство classList с помощью которого можно манипулировать классами HTML элементов
2-При добавлении класса .hidden к любому элементу, он исчезнет, при удалении этого класса, он появится
3-Не забудьте про то, что закрыть модальное окно можно как с помощью кнопки-крестика в верхнем правом углу модального окна, так и с помощью нажатия на любое место "Оверлей"
*/

const btnOpenModal = document.querySelectorAll(".show-modal");
const modalWindow = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

for (let value of btnOpenModal) {
  value.addEventListener("click", function () {
    overlay.classList.toggle("hidden");
    modalWindow.classList.toggle("hidden");
  });
}

btnCloseModal.addEventListener("click", function () {
  overlay.classList.toggle("hidden");
  modalWindow.classList.toggle("hidden");
});

overlay.addEventListener("click", function () {
  overlay.classList.toggle("hidden");
  modalWindow.classList.toggle("hidden");
});

document.addEventListener("keydown", function (event) {
  if (event.key == "Escape" && !modalWindow.classList.contains("hidden")) {
    overlay.classList.toggle("hidden");
    modalWindow.classList.toggle("hidden");
  }
});
