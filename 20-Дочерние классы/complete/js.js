"use strict";
/* 

ЗАДАЧА:
1.Используй функцию конструктор чтобы создать электор автомобиль(ElectroCar), который будет дочерним классом автомобиля. Помимо свойств марки(mark) и скорости(speed), у дочернего класса электро автомобиля, создайте свойство уровня заряда батареи(chargeBattery).
2.Создайте метод зарядки электро автомобиля, у которого будет параметр (chargeTo) который при вызове этого метода, будет менять уровень заряда в свойствах электро автомобиля.
3. Создайте метод ускорения(accelerate) который будет увеличивать скорость на 20км\ч и уменьшать уровень заряда авто на 1%. И выводить сообщение: "Tesla едет со скоростью 120км\ч, с уровнем заряда 22%"
4.Создайте экземпляр дочернего класса и поэкспериментируйте с вызовом методов.

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



*/

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

const tesla = new ElectroCar("Tesla", 100, 70);
tesla.chargeBattery(80);
tesla.accelerate();
console.log(tesla);
