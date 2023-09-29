"use strict";
/* 
ЗАДАЧА:
1.Создайте функцию конструктор которая будет представлять автомобиль. В функции конструктор создайте 2 свойства для автомобиля - марка и скорость в км\ч
2.Создайте метод ускорения который будет увеличивать скорость автомобиля на 10 км\ч и выводить новую, общую скорость в консоль.
3.Создайте метод торможения, который будет уменьшать скорость автомобиля на 5 км\ч и выводить общую скорость в консоль.
4.Создайте 2 объекта автомобиля из функции конструктора и используйте методы, который вы создали в функции конструкторе.

ДАННЫЕ:
Авто№1 - "Lada", скорость 170км\ч
Авто№2 - "Skoda", скорость 105км\ч

*/

function Car(brand, speed) {
  this.brand = brand;
  this.speed = speed;
  this.accelerate = function () {
    this.speed += 10;
    console.log(`${this.brand} speed ${this.speed}`);
  };
  this.decelerate = function () {
    this.speed -= 5;
    console.log(`${this.brand} brake ${this.speed}`);
  };
}

const car1 = new Car("Lada", 170);
const car2 = new Car("Skoda", 105);

car1.accelerate();
car1.decelerate();
car2.accelerate();
car2.decelerate();
