"use strict";

// Создание дочернего класса

// function Manager(firstName, lastName, age, position, department) {
//   Employee.call(this, firstName, lastName, age, position);
//   this.department = department;
// }
//
// Manager.prototype = Object.create(Employee.prototype); // - наследуем прототип Employee
//
// Manager.prototype.sayHello = function () {
//   console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
// }; // - добавляем новый метод sayHello()
//
// const manager1 = new Manager("Pere", "Petrov", 25, "Manager", "IT");

class Employee {
  constructor(firstName, lastName, age, position) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.position = position;
  }

  calcBirthYear() {
    console.log(new Date().getFullYear() - this.age);
  }
}

// Наследование классов с помощью extends
class Manager extends Employee {
  constructor(firstName, lastName, age, position, department) {
    super(firstName, lastName, age, position);
    this.department = department;
  } // - вызываем конструктор родителя с помощью super()
  sayHello() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  }
}

const manager1 = new Manager("Pere", "Petrov", 25, "Manager", "IT");
console.log(manager1);
manager1.sayHello();
manager1.calcBirthYear();
