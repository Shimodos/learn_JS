"use strict";

class Card {
  constructor(src, alt, price, oldPrice, type, descr, parent) {
    this.src = src;
    this.alt = alt;
    this.price = price;
    this.oldPrice = oldPrice;
    this.type = type;
    this.descr = descr;
    this.parent = parent;
    this.sale = Math.floor((this.price / this.oldPrice) * 100 - 100);
  }
  reder() {
    document.querySelector(this.parent).insertAdjacentHTML(
      "beforeend",

      `
    <div class="card">
        <img class="card__img" src="${this.src}" alt="${this.alt}" />
        <div class="card__sale">${this.sale}%</div>
        <div class="card__price">
        ${this.price}р<span class="card__old-Price"> <s>${this.oldPrice}р</s> </span>
        </div>
        <div class="card__type">${this.type}</div>
        <div class="card__descr">${this.descr}</div>
  </div>
        
        `
    );
  }
}

document.querySelector(".btn").addEventListener("click", function () {
  for (let i = 0; i < 3; i++) {
    new Card(
      `img/tv-${i + 1}.png`,
      "tv",
      18800,
      28500,
      "Старая коллекция",
      "Лучший телевизор на свете земля",
      ".cards"
    ).reder();
  }
});

// let copyOfCard = new Card(
//   "img/tv-2.png",
//   "tv",
//   18800,
//   28500,
//   "Старая коллекция",
//   "Лучший телевизор на свете земля",
//   ".cards"
// );

// copyOfCard.reder();
// copyOfCard.reder();
