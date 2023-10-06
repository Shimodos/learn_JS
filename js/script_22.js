"use strict";

// Публичные и приватные поля классов
class Account {
  _movements = []; // Public field (instance property)
  constructor(name, currency, pin) {
    this.name = name;
    this.currency = currency;
    this._pin = pin; // Private field (instance property)
    console.log(`Thanks for opening an account, ${name}!`);
  }
  seyHello() {
    console.log(`Hello ${this.name}`);
  }
  changePin(newPin) {
    this._pin = newPin;
  }
  deposit(val) {
    this._movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }
  getMovements() {
    return this._movements;
  }
}

const account1 = new Account("Jonas", "EUR", 1111);
console.log(account1);

account1.deposit(1000);
account1.withdraw(500);
console.log(account1.getMovements());
