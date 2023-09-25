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

// Sticky navigation - прилипающая навигация

// старый способ
const navContainer = document.querySelector(".nav");
// const coord = section1.getBoundingClientRect();
// console.log(coord);
// console.log(window.pageXOffset, window.pageYOffset);
//
// window.addEventListener("scroll", (e) => {
//   console.log(window.scrollY);
//   if (window.scrollY > coord.top) {
//     navContainer.classList.add("sticky");
//   } else {
//     navContainer.classList.remove("sticky");
//   }
// });

// новый способ
const header = document.querySelector(".header");
function callBack(entries, observer) {
  if (!entries[0].isIntersecting) {
    navContainer.classList.add("sticky");
  } else {
    navContainer.classList.remove("sticky");
  }
}
const options = {
  threshold: 0, // 0 - 1
  rootMargin: "-400px",
};

const observer = new IntersectionObserver(callBack, options);
observer.observe(header);

// // Reveal sections
// const allSections = document.querySelectorAll(".section");
//
// function revealSection(entries, observer) {
//   const [entry] = entries; // деструктуризация массива
//   if (!entry.isIntersecting) return; // если элемент не пересекается с видимой частью экрана, то ничего не делаем
//   entry.target.classList.remove("section--hidden");
//   observer.unobserve(entry.target); // останавливает наблюдение за элементом
// }
//
// const sectionObserver = new IntersectionObserver(revealSection, {
//   threshold: 0.15,
// });
//
// allSections.forEach((section) => {
//   sectionObserver.observe(section);
//   section.classList.add("section--hidden");
// });

// Lazy loading images
const imgTargets = document.querySelectorAll("img[data-src]");
console.log(imgTargets);

function loadImg(entries, observer) {
  const [entry] = entries; // деструктуризация массива
  if (!entry.isIntersecting) return; // если элемент не пересекается с видимой частью экрана, то ничего не делаем
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });
  observer.unobserve(entry.target); // останавливает наблюдение за элементом
}
const imgObserver = new IntersectionObserver(loadImg, { threshold: 0.15 });

imgTargets.forEach((img) => imgObserver.observe(img)); // наблюдает за всеми картинками

// Slider
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

let curSlide = 0;
const maxSlide = slides.length;

// slider.style.scale = 0.5;
// slider.style.overflow = "visible";

function goToSlide(slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`),
  );
}

goToSlide(0);

function nextSlide() {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
}

function prevSlide() {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
}

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);
