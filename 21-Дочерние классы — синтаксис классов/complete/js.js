"use strict";
/* 

ЗАДАЧА:

1.Перепешите код из прошлой практики в синтаксис классов.
2.Сделайте свойство charge приватным.
3.Сделайте так чтобы методы chargeBattery и accelerate можно было вызывать по цепочке.

ДАННЫЕ из прошлой практики:

const Car = function (mark, speed) {
  this.mark = mark;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.mark} едедет со скоростью ${this.speed} км\ч`);
};
Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`${this.mark} едедет со скоростью ${this.speed} км\ч`);
};

function ElectroCar(mark, speed, charge) {
  Car.call(this, mark, speed);
  this.charge = charge;
}

ElectroCar.prototype = Object.create(Car.prototype);

ElectroCar.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
ElectroCar.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.mark} едет со скоростью ${this.speed} , с уровнем заряда ${this.charge} `
  );
};

*/

class Car {
  constructor(mark, speed) {
    this.mark = mark;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.mark} едедет со скоростью ${this.speed} км\ч`);
  }
  break() {
    this.speed -= 5;
    console.log(`${this.mark} едедет со скоростью ${this.speed} км\ч`);
  }
}

class ElectroCar extends Car {
  #charge;
  constructor(mark, speed, charge) {
    super(mark, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.mark} едет со скоростью ${this.speed} , с уровнем заряда ${
        this.#charge
      } `
    );
    return this;
  }
}

const tesla = new ElectroCar("Tesla", 100, 70);
tesla.chargeBattery(95).accelerate();
console.log(tesla);
