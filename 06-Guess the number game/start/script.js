"use strict";

///////////////////////////////////////

/* 
ЗАДАЧА: 
Создайте игру в угадай число.


Удачи)
*/

// 1. Создаем переменные
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// 1.2 Функция вывода сообщения
const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

// 2. Функция проверки
const checkNumber = () => {
  const guess = Number(document.querySelector(".guess").value);

  // 3. Если нет числа
  if (!guess) {
    displayMessage("⛔️ No number!");

    // 4. Если угадали
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct number!");
    document.querySelector(".number").textContent = secretNumber;

    // 5. Изменяем стили
    document.querySelector("body").style.background = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // 6. Проверяем рекорд
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // 7. Если не угадали
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "📈 Too high!" : "📉 Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
};

// 8. Проверяем число
document.querySelector(".check").addEventListener("click", checkNumber);

// 9. Сбрасываем игру
document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
