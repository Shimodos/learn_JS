"use strict";

// Статические методы

// Статические методы - это методы, которые принадлежат классу, а не его экземплярам.

// console.log(Array.from(document.querySelectorAll("h1"))); // - это статический метод, который принадлежит классу Array.
//
// class Article {
//   constructor(title, date) {
//     this.title = title;
//     this.date = date;
//   }
//   static createTodays() {
//     // this = Article
//     return new this("Сегодняшний дайджест", new Date());
//   }
// }
//
// console.log(Article.createTodays());
//
// let article = new Article("Новый дайджест", new Date(2019, 1, 1));
//
// console.log(article.createTodays()); // - ошибка, так как метод createTodays() принадлежит классу, а не его экземплярам.

class User1 {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  calcBirthYear() {
    return new Date().getFullYear() - this.age;
  }
}

const ivan1 = new User1("Ivan", "Ivanov", 30);
console.log(ivan1.calcBirthYear());

// Наследование статических методов
const newProto = {
  calcBirth() {
    console.log(2037 - this.age);
  },
  init(firstName, age) {
    this.firstName = firstName;
    this.age = age;
  },
};

const newIvan = Object.create(newProto); // - создаем новый объект newIvan, который будет прототипно наследоваться от объекта newProto.
newIvan.init("Ivan", 30);
newIvan.age = 30;
console.log(newIvan); // - {firstName: "Ivan", age: 30}
newIvan.calcBirth(); // - 2007

// Создание дочернего класса
function Employee(firstName, lastName, age, position) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.position = position;
}

Employee.prototype.calcBirthYear = function () {
  console.log(new Date().getFullYear() - this.age);
};

const worker1 = new Employee("Ivan", "Ivanov", 30, "Frontend");
console.log(worker1); // - Employee {firstName: "Ivan", lastName: "Ivanov", age: 30, position: "Frontend"}
worker1.calcBirthYear(); // - 2007

function Manager(firstName, lastName, age, position, department) {
  Employee.call(this, firstName, lastName, age, position);
  this.department = department;
}

Manager.prototype = Object.create(Employee.prototype); // - наследуем прототип Employee

Manager.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
}; // - добавляем новый метод sayHello()

const manager1 = new Manager("Pere", "Petrov", 25, "Manager", "IT");
console.log(manager1); // - Manager {firstName: "Pere", lastName: "Petrov", age: 30, position: "Manager", department: "IT"}
manager1.calcBirthYear();
manager1.sayHello();
