"use strict";

// Публичные и приватные поля классов
class Account {
  #movements = []; // Public field (instance property)
  #pin; // Private field (instance property)
  constructor(name, currency, pin) {
    this.name = name;
    this.currency = currency;
    this.#pin = pin; // Private field (instance property)
    console.log(`Thanks for opening an account, ${name}!`);
  }
  seyHello() {
    console.log(`Hello ${this.name}`);
  }
  changePin(newPin) {
    this._pin = newPin;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }
  getMovements() {
    console.log(this.#movements);
  }
}

const account1 = new Account("Jonas", "EUR", 1111);
console.log(account1);

account1.deposit(1000).deposit(1000).withdraw(500).withdraw(500).getMovements(); // chaining methods цепочка методов
