"use strict";

function User(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}
// наследование прототипа от Object
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const ivan = new User("Ivan", "Ivanov", 20);
console.log(ivan);
console.log(ivan.getFullName());

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
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

const ivan1 = new User1("Ivan", "Ivanov", 20);
console.log(ivan1);
console.log(ivan1.getFullName());
