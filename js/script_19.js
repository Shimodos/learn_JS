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

const arr = [];
console.log(arr);
