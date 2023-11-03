"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

// Старый способ с использованием XMLHttpRequest

// function renderCountry(country) {
//   const request = new XMLHttpRequest();

//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   function renderCards(data, className = "") {
//     const html = `
//     <article class="country ${className}">
//       <img class="country__img" src="${data.flags.svg}" />
//       <div class="country__data">
//       <h3 class="country__name">${data.name.common}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${data.population}</p>
//       <p class="country__row"><span>🗣️</span>${
//         Object.entries(data.languages)[0][1]
//       }</p>
//       <p class="country__row"><span>💰</span>${
//         Object.entries(Object.entries(data.currencies)[0][1])[0][1]
//       }</p>
//       </div>
//     </article>`;

//     countriesContainer.insertAdjacentHTML("beforeend", html);
//     countriesContainer.style.opacity = 1;
//   }

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     const neighbour = data.borders[0];
//     console.log(neighbour);

//     renderCards(data);

//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener("load", function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCards(data2, "neighbour");
//     });
//   });
// }

// // renderCountry("usa");
// // renderCountry("ukraine");
// renderCountry("canada");

// Новый способ с использованием fetch и промисов

function renderCards(data, className = "") {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.svg}" />
      <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${data.population}</p>
      <p class="country__row"><span>🗣️</span>${
        Object.entries(data.languages)[0][1]
      }</p>
      <p class="country__row"><span>💰</span>${
        Object.entries(Object.entries(data.currencies)[0][1])[0][1]
      }</p>
      </div>
    </article>`;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
}

const renderError = (message) => {
  countriesContainer.insertAdjacentText("beforeend", message);
  countriesContainer.style.opacity = 1;
};

const gatRenderCountry = function (country, className = "") {
  // Обработка ошибок в промисах

  //   const request = fetch(`https://restcountries.com/v3.1/name/${country}`);

  //   console.log(request);
  //   request
  //     .then((response) => {
  //       console.log(request);
  //       console.log(response);

  //       if (!response.ok) {
  //         throw new Error(`Country not found ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       renderCards(data[0], className);
  //       const neighbour = data[0].borders[0];
  //       console.log(neighbour);

  //       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
  //     })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(`Country not found ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       renderCards(data[0], "neighbour");
  //     })
  //     .catch((err) => {
  //       renderError(`Something went wrong ${err.message}. Try again!`);
  //     })
  //     .finally(() => {
  //       countriesContainer.style.opacity = 1;
  //     });
  // };

  // btn.addEventListener("click", function () {
  //   gatRenderCountry("usa");
  // });

  // Обработка ошибок в асинхронных функциях

  function getJSON(url, errorMsg = "Something went wrong") {
    return fetch(url).then((response) => {
      if (!response.ok) {
        throw new Error(`${errorMsg} ${response.status}`);
      }
      return response.json();
    });
  }

  const request = fetch(`https://restcountries.com/v3.1/name/${country}`);

  getJSON(`https://restcountries.com/v3.1/name/${country}`, "Country not found")
    .then((data) => {
      renderCards(data[0], className);
      console.log(data[0]);
      const neighbour = data[0].borders[0];
      console.log(neighbour);
      if (!neighbour) throw new Error("No neighbour found!");

      // Стрна сосед
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        "Country not found",
      );
    })
    .then((data) => {
      renderCards(data[0], "neighbour");
    })
    .catch((err) => {
      renderError(`Something went wrong ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener("click", function () {
  gatRenderCountry("usa");
});

// молучение координат с помощью API Geolocation

navigator.geolocation.getCurrentPosition(
  (position) => {
    console.log(position);
    const { latitude: lat, longitude: lng } = position.coords;

    fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth=252249625603227513291x29043`,
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(` error ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        const country = result.country;
        // console.log(result);
        return fetch(`https://restcountries.com/v3.1/name/${country}`);
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data[0]);
        renderCards(data[0]);
      })
      .catch((err) => {
        renderError(`Something went wrong ${err.message}. Try again!`);
      })
      .finally(() => {
        countriesContainer.style.opacity = 1;
      });
  },
  () => {
    console.log(alert);
    alert("Could not get your position");
  },
);

// 23. Асинхронное программирование, часть 2

// const pos = new Promise(function (resolve, reject) {
//   navigator.geolocation.getCurrentPosition(resolve, reject);
// }).then((res) => console.log(res));

// Async/Await
const whereAmI = async function (country) {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    if (!res.ok) throw new Error("Country not found");
    const data = await res.json();
    // console.log(res);
    // console.log(data);
    // renderCards(data[0]);
    return `You are in ${data[0].name.common}`;
  } catch (err) {
    throw new Error(`Something went wrong ${err.message}. Try again!`);
  }
};

const city = whereAmI("usa");
console.log(city);

// then и catch в асинхронных функциях
// whereAmI("usa")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async/await с try/catch
// (async function () {
//   try {
//     const city = await whereAmI("usa");
//     console.log(city);
//   } catch (err) {
//     console.log(err);
//   }
// })();

async function get3Countries(c1, c2, c3) {
  try {
    // const response1 = await fetch(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data1] = await response1.json();
    // console.log(data1.capital);
    //
    // const response2 = await fetch(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data2] = await response2.json();
    // console.log(data2.capital);
    //
    // const response3 = await fetch(`https://restcountries.com/v3.1/name/${c3}`);
    // const [data3] = await response3.json();
    // console.log(data3.capital);

    const data = await Promise.all([
      fetch(`https://restcountries.com/v3.1/name/${c1}`).then((response) =>
        response.json(),
      ),

      fetch(`https://restcountries.com/v3.1/name/${c2}`).then((response) =>
        response.json(),
      ),

      fetch(`https://restcountries.com/v3.1/name/${c3}`).then((response) =>
        response.json(),
      ),
    ]);

    console.log(data.map((val) => val[0].capital));
  } catch (err) {
    console.log(err);
  }
}

get3Countries("usa", "ukraine", "canada");

// Promise race

(async function () {
  const res = await Promise.race([
    fetch(`https://restcountries.com/v3.1/name/usa`).then((response) =>
      response.json(),
    ),

    fetch(`https://restcountries.com/v3.1/name/ukraine`).then((response) =>
      response.json(),
    ),

    fetch(`https://restcountries.com/v3.1/name/canada`).then((response) =>
      response.json(),
    ),
  ]);
  console.log(res[0]);
})();

function timeout(sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${sec} second`));
    }, sec * 1000);
  });
}

Promise.race([
  fetch(`https://restcountries.com/v3.1/name/usa`).then((response) =>
    response.json(),
  ),
  timeout(1),
])
  .then((res) => console.log(res[0].capital))
  .catch((err) => console.log(err));

// Promise.allSettled - возвращает все промисы, даже если один из них завершится с ошибкой
Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("Error"),
  Promise.resolve("Another success"),
]).then((res) => console.log(res));

// Promise.any - возвращает первый успешный промис из множества промисов
Promise.any([
  Promise.resolve("Success"),
  Promise.reject("Error"),
  Promise.resolve("Another success"),
]).then((res) => console.log(res));

// console.log("hello");
whereAmI("usa");

// try {
//   let x = 1;
//   const y = 2;
//   y = 3;
// } catch (err) {
//   console.log(err);
// }

// Промисы и асинхронность

// const lotteryPromise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve("You WIN!");
//     } else {
//       reject("You lost your money");
//     }
//   }, 2000);
// });

// console.log(lotteryPromise);

// lotteryPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// // Промисификация

// // setTimeout(() => {
// //   console.log("1 second passed");
// //   setTimeout(() => {
// //     console.log("2 second passed");
// //     setTimeout(() => {
// //       console.log("3 second passed");
// //     }, 1000);
// //   }, 1000);
// // }, 1000);

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(5)
//   .then(() => {
//     console.log("1 second passed");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("2 second passed");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("3 second passed");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("4 second passed");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("5 second passed");
//     return wait(1);
//   });

// Промисы и асинхронность

// console.log("Test start");
// setTimeout(() => console.log("0 sec timer"), 0);
// Promise.resolve("Resolved promise 1").then((res) => console.log(res));
// Promise.resolve("Resolved promise 2").then((res) => {
//   for (let i = 0; i < 100; i++) {}
//   console.log(res);
// });
// console.log("Test end");
