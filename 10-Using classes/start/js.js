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
  render() {
    document.querySelector(this.parent).insertAdjacentHTML(
      "beforeend",
      `
    <div class="card">
      <img class="card__img" src="${this.src}" alt="${this.alt}" />
      <div class="card__sale">${this.sale}%</div>
      <div class="card__price">
        ${this.price}<span class="card__old-Price"> <s>${this.oldPrice}</s> </span>
      </div>
      <div class="card__type">${this.type}</div>
      <div class="card__descr">${this.descr}</div>
    </div>
    `,
    );
  }
}

document.querySelector(".btn").addEventListener("click", () => {
  for (let i = 0; i < 3; i++) {
    new Card(
      `img/tv-${i + 2}.png`,
      "tv",
      100,
      200,
      " Old collection",
      "Beast TV in the world",
      ".cards",
    ).render();
  }
});

// let copyOfCard = new Card(
//   "img/tv-2.png",
//   "tv",
//   100,
//   200,
//   " Old collection",
//   "Beast TV in the world",
//   ".cards",
// );
