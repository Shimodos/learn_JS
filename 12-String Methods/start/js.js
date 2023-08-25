"use strict";

/*
ЗАДАЧИ:

Создайте программу которая будет преобразовывать переменные слова в которых разделены нижним тире, в переменные которые будут записанны в camelCase нотации.
/////////

Подсказки:
1) Решение должно работать с переменными из 2-х слов. Не больше
2)Чтобы получить строку введенных данных из textarea, можно получить значение свойства value, DOM элемента textarea
3) Практика сложная, поэтому если на чем то застряли, посмотрите решение проблемы и пробуйте дальше самостоятельно.
4)Записать результат вы можете в div с классом output, через innerText
5)  По итогу переменные должны выглядеть так: 
underscoreCase
firstName
someVariable
calculateAge
delayedDeparture

*/

// const btn = document.querySelector(".btn");
// const output = document.querySelector(".output");
// const input = document.querySelector(".text");
//
// btn.addEventListener("click", () => {
//   const inputText = input.value;
//   const arr = inputText.split("\n");
//   let result = " ";
//   for (let i = 0; i < arr.length; i++) {
//     const el = arr[i];
//     const elArr = el.split("_");
//     let newEl = elArr[0];
//     for (let j = 1; j < elArr.length; j++) {
//       const el = elArr[j];
//       newEl += el[0].toUpperCase() + el.slice(1);
//     }
//     result += newEl + "\n";
//   }
//   output.innerText = result;
// });

document.querySelector(".btn").addEventListener("click", () => {
  const text = document.querySelector(".text").value;
  const arr = text.split("\n");
  let output = [];
  // console.log(arr);

  for (let i of arr) {
    const [first, second] = i.trim().toLowerCase().split("_");
    // console.log(first, second);
    output.push(first + second.replace(second[0], second[0].toUpperCase()));
    console.log(output);
  }
  document.querySelector(".output").innerText = output.join("\n");
});
