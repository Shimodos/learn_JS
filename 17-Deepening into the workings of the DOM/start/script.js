"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Прокрутка страницы до элемента
const btnScroll = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScroll.addEventListener("click", function (e) {
  // window.scrollTo({
  //   left: section1.getBoundingClientRect().left + window.pageXOffset,
  //   top: section1.getBoundingClientRect().top + window.pageYOffset,
  //   behavior: "smooth",
  // }); // скролл до элемента старый способ
  section1.scrollIntoView({ behavior: "smooth" }); // скролл до элемента  новый способ
});

// Page navigation
// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

// Event delegation - делегирование событийж
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e.target);
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// const h1 = document.querySelector("h1");

// function alertH1(e) {
//   alert("Hello");
//   // h1.removeEventListener("mouseenter", alertH1); // удаляет обработчик события
// }
// h1.addEventListener("mouseenter", alertH1); // добавляет обработчик события
//
// setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000); // удаляет обработчик события через 3 секунды

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// Работа с событиями на родителе и потомках (всплытие и погружение)
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`; // создает рандомный цвет
//
// const nav = document.querySelector(".nav"),
//   navLinks = document.querySelector(".nav__links"),
//   navLink = document.querySelector(".nav__link");
//
// nav.addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor(); // this - это элемент на котором произошло событие
//   console.log("LINK", e.target, e.currentTarget === this);
//   // e.stopPropagation(); // останавливает всплытие события
// });
//
// navLinks.addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor(); // this - это элемент на котором произошло событие
//
//   // e.stopPropagation(); // останавливает всплытие события
// });
//
// navLink.addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor(); // this - это элемент на котором произошло событие
//   e.stopPropagation(); // останавливает всплытие события
// });
