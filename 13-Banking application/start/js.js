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
const displayMovements = function (movements) {
  containerMovements.innerHTML = "";
  movements.forEach(function (value, i) {
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
console.log(accounts);

// All balance of all accounts
const calcPrintBalance = function (movements) {
  const balance = movements.reduce((acc, value) => acc + value, 0);
  labelBalance.textContent = `${balance} ₴`;
};

calcPrintBalance(account1.movements);

// Summary of incomes, out, interest
const calcDisplaySummary = function (movements) {
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
};

calcDisplaySummary(account1.movements);

// Account login

let currentAccount;
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.login === inputLoginUsername.value,
  );
  console.log(currentAccount);
  if (currentAccount && currentAccount.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Добро пожаловать, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    // Display movements
    displayMovements(currentAccount.movements);

    // Display balance
    calcPrintBalance(currentAccount.movements);

    // Display summary
    calcDisplaySummary(currentAccount.movements);
  }
  console.log("LOGIN");
});
