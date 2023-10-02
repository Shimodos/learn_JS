"use strict";

// Статические методы

// Статические методы - это методы, которые принадлежат классу, а не его экземплярам.

console.log(Array.from(document.querySelectorAll("h1"))); // - это статический метод, который принадлежит классу Array.

class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }
  static createTodays() {
    // this = Article
    return new this("Сегодняшний дайджест", new Date());
  }
}

console.log(Article.createTodays());

let article = new Article("Новый дайджест", new Date(2019, 1, 1));

console.log(article.createTodays()); // - ошибка, так как метод createTodays() принадлежит классу, а не его экземплярам.
