"use strict";

const user = {
  name: "John",
  age: 30,
  calcAge: function () {
    // первый вариант

    // const self = this;
    // console.log(this);
    //
    // function newFn() {
    //   console.log(self);
    // }

    // второй вариант
    const newFn = () => {
      console.log(this);
    };

    newFn();
  },
};

user.calcAge();

//
// function calcAge() {
//   console.log(2023 - this.age);
// }

// document.querySelector("h1").addEventListener("click", function () {
//   this.style.color = "red";
//   console.log(this);
// });
