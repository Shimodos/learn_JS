"use strict";

/*
ОПИСАНИЕ:
-Вам нужно выяснить кто из собак переедает или недоедает
-Переедает\Недоедает - означает что собака есть больше рекомендованной порции или меньше рекомендованной на 10%
-Нормальной порцией для собаки считается та, которая в пределах 10% больше или меньше рекомендованной
-Формула: recommendedFood = weight ** 0.75 * 28

ЗАДАЧИ:
1) Переберите массив dogs, и высчитайте рекомендованное количество еды для каждой собаки. Запишите полученный результат как новое свойство объектов массива dogs.
2) Найдите с помощью метода собаку владельца Marina и с помощью тернарного оператора определите, ест ли ее собака больше или меньше рекомендованной нормы (recommendedFood). Ответ выведите в консоль: в одном случае сообщение о том, что собака переедает, в другом - что недоедает.
3) Создайте массив, в который попадут все владельцы собак, которые едят больше рекомендованной нормы ('ownersEatTooMuch'), и массив, в который попадут хозяева собак, которые едят меньше рекомендованной нормы ('ownersEatTooLittle').
4)Выведите в консоль строку с сообщением: Пример: "Собаки Marina и Viktor едят слишком много! Собаки Masha и Dima едят слишком мало"(Данные возмите из массива который получится в задании номер 3).
5) Выведите в консоль сообщение с булевым значением, есть ли вообще хоть одна собака которая ест в точности столько сколько нужно по формуле. Просто (true/false)
6) Выведите в консоль сообщение с булевым значением, есть ли вообще хоть одна собака которая питается правильно (В пределах 10% от необходимого). Просто (true/false)
7)Создайте массив содержащий собак которые питаются достаточно (В пределах 10%).
8) Создайте независимую копию массива с собаками и отсортируйте его по рекомендованным порциям еды, в возрастающем порядке.

ПОДСКАЗКА:
Достаточное питание собаки должно быть между 90% и 110% от рекомендованной порции.

ДАННЫЕ:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Anna', 'Viktor'] },
  { weight: 8, curFood: 200, owners: ['Masha'] },
  { weight: 13, curFood: 275, owners: ['Marina', 'Ivan'] },
  { weight: 32, curFood: 340, owners: ['Dima'] }
];

*/

///1
const dogs = [
  { weight: 22, curFood: 250, owners: ["Anna", "Viktor"] },
  { weight: 8, curFood: 200, owners: ["Masha"] },
  { weight: 13, curFood: 275, owners: ["Marina", "Ivan"] },
  { weight: 32, curFood: 340, owners: ["Dima"] },
];

dogs.forEach(function (dog) {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
  console.log(dog.recommendedFood);
});
console.log(dogs);

///2
const dogMarina = dogs.find(function (dog) {
  return dog.owners.includes("Marina");
});
console.log(dogMarina);
console.log(
  `Собака Марины ест слишком ${
    dogMarina.curFood > dogMarina.recommendedFood ? "много" : "мало"
  }`
);
///3
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recommendedFood)
  .map((dog) => dog.owners)
  .flat();

console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recommendedFood)
  .map((dog) => dog.owners)
  .flat();
console.log(ownersEatTooLittle);

///4
console.log(`${ownersEatTooMuch.join(" и ")} собаки едят слишком много`);
console.log(`${ownersEatTooLittle.join(" и ")} собаки едят слишком много`);

///5

console.log(dogs.some((dog) => dog.curFood === dog.recommendedFood));

///6

console.log(
  dogs.some(
    (dog) =>
      dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
  )
);

////7
console.log(
  dogs.filter(
    (dog) =>
      dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
  )
);
/// 8

const dogsSorted = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);

console.log(dogsSorted);
