"use strict";

///////////////////////
/* 
ЗАДАЧА:
Создайте функционал для открытия модальных окон.


ПОДСКАЗКА:
1-Не забывайте про свойство classList с помощью которого можно манипулировать классами HTML элементов
2-При добавлении класса .hidden к любому элементу, он исчезнет, при удалении этого класса, он появится
3-Не забудьте про то, что закрыть модальное окно можно как с помощью кнопки-крестика, в верхнем правом углу модального окна, так и с помощью нажатия на любое место "Оверлей"
*/

// 1. Получаем все элементы, которые нам понадобятся
const modal = document.querySelector(".modal"),
  overlay = document.querySelector(".overlay"),
  btnCloseModal = document.querySelector(".close-modal"),
  btnOpenModal = document.querySelectorAll(".show-modal");

// 2. Создаем функцию, которая будет переключать классы у модального окна и оверлея
const modalToggle = () => {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

// 3. Создаем функцию, которая будет закрывать модальное окно
// const closeModal = () => {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// };

// 4. Перебираем все кнопки, которые открывают модальное окно и вешаем на них обработчик событий
// for (let i = 0; i < btnsOpenModal.length; i++) {
//   btnsOpenModal[i].addEventListener("click", openModal);
// } // Старый вариант

btnOpenModal.forEach((btn) => btn.addEventListener("click", modalToggle));

// 5. Вешаем обработчик событий на кнопку закрытия модального окна
btnCloseModal.addEventListener("click", modalToggle);

// 6. Вешаем обработчик событий на оверлей, чтобы закрывать модальное окно при клике на него
overlay.addEventListener("click", modalToggle);

// 7. Вешаем обработчик событий на клавишу Esc, чтобы закрывать модальное окно при нажатии на нее
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    modalToggle();
  }
});
