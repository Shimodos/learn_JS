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

// Tabbed component
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", function (e) {
  e.preventDefault();
  const clicked = e.target.closest(".operations__tab"); // closest - ищет ближайший родительский элемент с указанным селектором
  console.log(clicked);

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach((tab) => tab.classList.remove("operations__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

  // Active tab
  clicked.classList.add("operations__tab--active");

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`) // dataset - получает все data атрибуты
    .classList.add("operations__content--active");
});

// Menu fade animation

function hover(e, opacity) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link"); // closest - ищет ближайший родительский элемент с указанным селектором
    const logo = link.closest(".nav").querySelector(".nav__logo");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
}

const nav = document.querySelector(".nav");
nav.addEventListener("mouseover", hover.bind(0.5));
nav.addEventListener("mouseout", hover.bind(1));

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
