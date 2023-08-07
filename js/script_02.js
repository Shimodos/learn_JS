"use strict";

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
//
// // usage: functions showOk, showCancel are passed as arguments to ask
// ask(
//   "Do you agree?",
//   () => alert("You agreed."),
//   () => alert("You canceled the execution."),
// );

let sum = (a, b) => a + b;

console.log(sum(1, 2)); // 3

const firstName = "John";
const lastName = "Smith";

function calcAge() {
  return 2023 - this.birthYear;
}

const userFirst = {
  firstName,
  lastName,
  birthYear: 1982,
  calcAge,
};

const userSecond = {
  firstName,
  lastName,
  birthYear: 1942,
  calcAge,
};
console.log(userFirst.calcAge());
console.log(userSecond.calcAge());

// user.sex = "male";
// console.log(user);
//
// delete user.sex;
// console.log(user);

// user["sex"] = "male";
// console.log(user);
//
// delete user["sex"];
// console.log(user);

// const propertyName = "newProperty";
//
// user[propertyName + " 2"] = "new value";
// console.log(user);

// const answer = prompt("Enter your name", "John");
//
// alert(user[answer]);
