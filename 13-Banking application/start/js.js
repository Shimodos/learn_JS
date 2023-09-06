"use strict";

const account1 = {
  owner: "Dmitrii Fokeev",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  pin: 1111,
};

const account2 = {
  owner: "Anna Filimonova",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  pin: 2222,
};

const account3 = {
  owner: "Polina Filimonova",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  pin: 3333,
};

const account4 = {
  owner: "Stanislav Ivanchenko",
  movements: [430, 1000, 700, 50, 90],
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// Functions
const displayMovements = (movements, sort = false) => {
  containerMovements.innerHTML = "";

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements; // slice() - возвращает новый массив, содержащий копию части исходного массива
  movs.forEach(function (value, i) {
    const type = value > 0 ? "deposit" : "withdrawal";
    const operation = value > 0 ? "пополнение" : "снятие";

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">
        ${i + 1} ${operation}
      </div>
      <div class="movements__date">24/01/2037</div>
      <div class="movements__value">${value} ₴</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

// Login function
function createLogIn(accs) {
  accs.forEach((acc) => {
    acc.login = acc.owner
      .toLowerCase()
      .split(" ")
      .map((value) => value[0])
      .join("");
  });
}

createLogIn(accounts);

// All balance of all accounts
const calcPrintBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, value) => acc + value, 0);
  labelBalance.textContent = `${acc.balance} ₴`;
};

// calcPrintBalance(account1.movements);

// Summary of incomes, out, interest
function calcDisplaySummary(movements) {
  const incomes = movements
    .filter((move) => move > 0)
    .reduce((acc, move) => acc + move, 0);
  labelSumIn.textContent = `${incomes} ₴`;
  // console.log(incomes);

  const out = movements
    .filter((value) => value < 0)
    .reduce((acc, value) => acc + value, 0);
  labelSumOut.textContent = `${Math.abs(out)} ₴`; // Math.abs() - возвращает абсолютное значение числа
  // console.log(out);

  labelSumInterest.textContent = `${incomes + out} ₴`;
}

// calcDisplaySummary(account1.movements);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);
  // Display balance
  calcPrintBalance(acc);
  // Display summary
  calcDisplaySummary(acc.movements);
};

// Account login

let currentAccount;
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.login === inputLoginUsername.value,
  );
  if (currentAccount && currentAccount.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Добро пожаловать, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

// Transfer money

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value); // Number() - преобразует строку в число
  const receiverAcc = accounts.find(
    (acc) => acc.login === inputTransferTo.value,
  );
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc.login !== currentAccount.login // ?. - optional chaining
  ) {
    // Doing transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

// Close account

btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.login &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.login === currentAccount.login,
    );

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = "";
});

// Deposit money

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1) // some() - возвращает true, если хотя бы один элемент массива удовлетворяет условию
  ) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

// All movements sorting

const accMov = accounts.map((acc) => acc.movements);
console.log(accMov);

const allMoves = accMov.flat(); // flat() - возвращает новый массив, в котором все элементы вложенных подмассивов были рекурсивно "подняты" на указанный уровень
console.log(allMoves);

const allBalance = allMoves.reduce((acc, mov) => acc + mov, 0);
console.log(allBalance);

// short version of all movements sorting
const overalBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

// Sorting movements

// const arr = ["a", "d", "b", "c", "e"];
// console.log(arr);
// console.log(arr.sort()); // sort() - сортирует элементы массива на месте и возвращает отсортированный массив

// console.log(
//   account1.movements.sort((a, b) => a - b), // sort() - сортирует элементы массива на месте и возвращает отсортированный массив
// );

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// fill()

// const arr = [1, 2, 3, 4, 5, 6, 6];
// arr.fill("1", 2, 4); // fill() - заполняет все элементы массива от начального до конечного индексов одним значением
// console.log(arr);

// Array.from()

const str = "1234";
console.log(Array.from(str, (val, i) => "Num" + val)); // Array.from() - создаёт новый экземпляр Array из массивоподобного или итерируемого объекта

labelBalance.addEventListener("click", function () {
  Array.from(document.querySelectorAll(".movements__value"), function (val, i) {
    return (val.innerHTML = val.textContent.replace("₴", ""));
  });
});
