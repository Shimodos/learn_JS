"use strict";

// function User(firstName, lastName, age) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
// }
// // наследование прототипа от Object
// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };
//
// const ivan = new User("Ivan", "Ivanov", 20);
// console.log(ivan);
// console.log(ivan.getFullName());

// const arr = [];
// console.log(arr);
//
// // добавление метода в прототип Array
// Array.prototype.myOwnMethod = function () {
//   return [...new Set(this)];
// };
//
// const arr2 = [1, 2, 3, 4, 5, 5, 5, 5, 5, 5];
// console.log(arr2.myOwnMethod());

// Class declaration (объявление класса) синтаксический сахар (Укрощение синтаксиса)
class User1 {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age;
    this.birthYear = birthYear;
  }
  get birthYear() {
    return new Date().getFullYear() - this.age;
  }
  set birthYear(value) {
    const year = "" + value;
    if (year.length !== 4) {
      alert("Год указан не верно");
      return;
    }
    this.age = new Date().getFullYear() - year;
  }
}

const ivan1 = new User1("Ivan", "Ivanov", 1692);
console.log(ivan1);

// Getters and Setters

// const user = {
//   firstName: "Ivan",
//   lastName: "Ivanov",
//   age: 20,
//   get birthYear() {
//     return new Date().getFullYear() - this.age;
//   }, // getter - получение значения
// };
//
// console.log(user.birthYear);

class user {
  constructor(fullName) {
    this.firstName;
    this.lastName;
    this.fullName = fullName;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  } // getter - получение значения
  set fullName(value) {
    if (value.length < 3) {
      alert("Имя слишком короткое");
      return;
    }
    const name = value.split(" ");
    this.firstName = name[0];
    this.lastName = name[1];
  } // setter - установка значения
}

const ivan = new user("Ivan Ivanov");
console.log(ivan);
