"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

//////////////////////////////////////

// Функция которая запрашивает данные странн и создает карточки

// function getCountryData(country) {
//   const request = new XMLHttpRequest();

//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   // Функция которая использует данные с сервера для использования в HTML коде. + рендер карточки на странице.

//   function renderCards(data, className = "") {
//     const html = `
//     <article class="country ${className}">
//         <img class="country__img" src="${data.flags.svg}" />
//         <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${data.population}</p>
//             <p class="country__row"><span>🗣️</span>${
//               Object.entries(data.languages)[0][1]
//             }</p>
//             <p class="country__row"><span>💰</span>${
//               Object.entries(Object.entries(data.currencies)[0][1])[0][1]
//             }</p>
//         </div>
//     </article>
//   `;
//     // Выводим на страницу карточку и убираем нулевую прозрачность
//     countriesContainer.insertAdjacentHTML("beforeend", html);
//     countriesContainer.style.opacity = 1;
//   }

//   // Выполняем действия с данными после их загрузки
//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     const neighbour = data.borders[0];
//     console.log(neighbour);

//     // Выводим на страницу карточку с первой страной
//     renderCards(data);

//     // Создаем запрос к серверу внутри первой call-back функции
//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     // Выполняем действия с данными после их загрузки
//     request2.addEventListener("load", function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);

//       // Выводим на страницу карточку страны соседа
//       renderCards(data2, "neighbour");

//       request2.addEventListener("load", function () {
//         const [data2] = JSON.parse(this.responseText);
//         console.log(data2);

//         // Выводим на страницу карточку страны соседа
//         renderCards(data2, "neighbour");
//       });
//     });
//   });
// }

// getCountryData("russia");

// fetch

// const request = new XMLHttpRequest();

// request.open("GET", `https://restcountries.com/v3.1/name/russia`);
// request.send();
// console.log(request);

// fetch

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
    </article>
  `;
  // Выводим на страницу карточку и убираем нулевую прозрачность
  countriesContainer.insertAdjacentHTML("beforeend", html);
}
function renderError(message) {
  countriesContainer.insertAdjacentText("beforeend", message);
}

function getCountryData(country) {
  //Страна 1

  //// Обработка ошибок

  //   const request = fetch(`https://restcountries.com/v3.1/name/${country}`);

  //   console.log(request);
  //   request
  //     .then(function (response) {
  //       if (!response.ok) {
  //         throw new Error(`${errorMsg}(${response.status})`);
  //       }
  //       return response.json();
  //     })
  //     .then(function (data) {
  //       renderCards(data[0]);
  //      const neighbour = data[0].borders[0];

  //       //Страна сосед
  //       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
  //         .then(function (response) {
  //           if (!response.ok) {
  //             throw new Error(`Страна не найдена (${response.status})`);
  //           }
  //           return response.json();
  //         })
  //         .then(function (data) {
  //           const [res] = data;
  //           renderCards(res, "neighbour");
  //         });
  //     })
  //     .catch(function (err) {
  //       console.log(err);
  //       renderError(
  //         `Что то пошло не так из за ошибки: ${err.message}. Попробуйте позже`
  //       );
  //     })
  //     .finally(function () {
  //       countriesContainer.style.opacity = 1;
  //     });
  // }

  // btn.addEventListener("click", function () {
  //   getCountryData("usa");
  // });

  //// Обработка ошибок через внешнюю функцию.

  function getJSON(url, errorMsg = "Что то пошло не так.") {
    return fetch(url).then(function (response) {
      if (!response.ok) {
        throw new Error(`${errorMsg}(${response.status})`);
      }
      return response.json();
    });
  }

  const request = fetch(`https://restcountries.com/v3.1/name/${country}`);

  getJSON(`https://restcountries.com/v3.1/name/${country}`, "Cтрана не найдена")
    .then(function (data) {
      renderCards(data[0]);
      console.log(data[0]);
      const neighbour = data[0].borders;
      // const neighbour = "dsgfsdgsdg";
      console.log(neighbour);
      if (!neighbour) {
        throw new Error("Не найдено соседей");
      }

      //Страна сосед
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        "Cтрана не найдена"
      ).then(function (data) {
        const [res] = data;
        renderCards(res, "neighbour");
      });
    })
    .catch(function (err) {
      console.log(err);
      renderError(`Что то пошло не так из за ошибки: ${err.message}`);
    })
    .finally(function () {
      countriesContainer.style.opacity = 1;
    });
}

// btn.addEventListener("click", function () {
//   getCountryData("australia");
// });

///////// Готовая практика. Внешние API

// navigator.geolocation.getCurrentPosition(
//   function (pos) {
//     console.log(pos);
//     const { latitude, longitude } = pos.coords;

//     fetch(
//       `https://geocode.xyz/${latitude},${longitude}?geoit=json&auth=442426570626257657862x66288`
//     )
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (result) {
//         const country = result.country;

//         console.log(result);
//         return fetch(`https://restcountries.com/v3.1/name/${country}`);
//       })
//       .then(function (response) {
//         if (!response.ok) {
//           throw new Error(`Что то пошло не так(${response.status})`);
//         }
//         return response.json();
//       })
//       .then(function (data) {
//         console.log(data);
//         renderCards(data[1]);
//       })
//       .catch(function (err) {
//         console.log(err);
//         renderError(`Что то пошло не так из за ошибки: ${err.message}`);
//       })
//       .finally(function () {
//         countriesContainer.style.opacity = 1;
//       });
//   },
//   function () {
//     alert("Вы не передали свою гео-позицию");
//   }
// );

//////////////////
//Промисификация коллбэков

// const lotteryTicket = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve("Win");
//     } else {
//       reject("lose");
//     }
//   }, 2000);
// });

// lotteryTicket
//   .then(function (res) {
//     console.log(lotteryTicket);
//     console.log(res);
//   })
//   .catch(function (err) {
//     console.error(err);
//   });

// console.log(lotteryTicket);

// setTimeout(function () {
//   console.log("Прошла 1 сек");
//   setTimeout(function () {
//     console.log("Прошла 2 сек");
//     setTimeout(function () {
//       console.log("Прошла 3 сек");
//       setTimeout(function () {
//         console.log("Прошла 4 сек");
//         setTimeout(function () {
//           console.log("Прошла 5 сек");
//           setTimeout(function () {
//             console.log("Прошла 6 сек");
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// function wait(seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// }

// wait(2)
//   .then(function () {
//     console.log("Вы ждали 1 секунды");
//     return wait(1);
//   })
//   .then(function () {
//     console.log("Вы ждали еще 2 секунду");
//     return wait(1);
//   })
//   .then(function () {
//     console.log("Вы ждали 3 секунды");
//     return wait(1);
//   })
//   .then(function () {
//     console.log("Вы ждали 4 секунды");
//     return wait(1);
//   })
//   .then(function () {
//     console.log("Вы ждали 5 секунды");
//     return wait(1);
//   });

////////////////
///Последовательнос работы кода

// console.log("Test start");

// setTimeout(function () {
//   console.log("0 sec timer");
// }, 0);

// Promise.resolve("Resolved promise 1").then(function (res) {
//   console.log(res);
// });

// Promise.resolve("Resolved promise 2").then(function (res) {
//   for (let i = 0; i < 10000000000; i++) {}
//   console.log(res);
// });
// console.log("Test end");

//////////////////

// navigator.geolocation.getCurrentPosition(
//     function (pos) {
//       console.log(pos);
//       const { latitude, longitude } = pos.coords;

//       fetch(
//         `https://geocode.xyz/${latitude},${longitude}?geoit=json&auth=442426570626257657862x66288`
//       )
//         .then(function (response) {
//           return response.json();
//         })
//         .then(function (result) {
//           const country = result.country;

//           console.log(result);
//           return fetch(`https://restcountries.com/v3.1/name/${country}`);
//         })

//////////////////////////
///Промисификация  geolocation API

// new Promise(function (result, reject) {
//   // navigator.geolocation.getCurrentPosition(
//   //   function (position) {
//   //     result(position);
//   //   },
//   //   function (err) {
//   //     reject(err);
//   //   }
//   // );
//   navigator.geolocation.getCurrentPosition(result, reject);
// }).then(function (data) {
//   console.log(data);
// });

//////////////
//  Async/Await

// async function getCountry(country) {
// fetch(`https://restcountries.com/v3.1/name/${country}`)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

//   try {
//     const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
//     if (!res.ok) {
//       throw new Error("У вас нет интернета");
//     }
//     const data = await res.json();

//     return `Ваша страна ${data[0].name.common}`;
//   } catch (err) {
//     throw new Error("Что то пошло не так");
//   }
// }

// btn.addEventListener("click", function () {
//   getCountry("usa");
// });

// // Возврат данных с помощью методов промисов
// getCountry("usa")
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

//   // Возврат данных с помощью async / await
// (async function () {
//   try {
//     const city = await getCountry("usa");
//     console.log(city);
//   } catch (err) {
//     console.log(err);
//   }
// })();

//Promise.all()

async function get3Capital(c1, c2, c3) {
  try {
    //Не параллельное выполнение

    // const response1 = await fetch(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data1] = await response1.json();

    // const response2 = await fetch(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data2] = await response2.json();

    // const response3 = await fetch(`https://restcountries.com/v3.1/name/${c3}`);
    // const [data3] = await response3.json();

    //Параллельное выполнение
    const data = await Promise.all([
      fetch(`https://restcountries.com/v3.1/name/${c1}`).then(function (resp) {
        return resp.json();
      }),
      fetch(`https://restcountries.com/v3.1/name/${c2}`).then(function (resp) {
        return resp.json();
      }),
      fetch(`https://restcountries.com/v3.1/name/${c3}`).then(function (resp) {
        return resp.json();
      }),
    ]);

    // console.log(
    //   data.map(function (val) {
    //     return val[0].capital;
    //   })
    // );
  } catch (err) {}
}

get3Capital("russia", "turkey", "thailand");

//Promise.race()

(async function () {
  const res = await Promise.race([
    fetch(`https://restcountries.com/v3.1/name/usa`).then(function (resp) {
      return resp.json();
    }),
    fetch(`https://restcountries.com/v3.1/name/russia`).then(function (resp) {
      return resp.json();
    }),
    fetch(`https://restcountries.com/v3.1/name/thailand`).then(function (resp) {
      return resp.json();
    }),
  ]);
})();

function timeout(sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Ожидание превысило ${sec} cек.`));
    }, sec * 1000);
  });
}

Promise.race([
  fetch(`https://restcountries.com/v3.1/name/usa`).then(function (resp) {
    return resp.json();
  }),
  timeout(0.4),
])
  .then(function (res) {
    console.log(res[0]);
  })
  .catch(function (err) {
    console.log(err);
  });

////Promise.allSettled()
Promise.allSettled([
  Promise.resolve("Выполнен"),
  Promise.reject("Отклонен"),
  Promise.resolve("Еще один Выполнен"),
]).then(function (res) {
  console.log(res);
});

// Promise.all([
//   Promise.resolve("Выполнен"),
//   Promise.reject("Отклонен"),
//   Promise.resolve("Еще один Выполнен"),
// ]).then(function (res) {
//   console.log(res);
// });

////Promise.any()

Promise.any([
  Promise.resolve("Выполнен"),
  Promise.reject("Отклонен"),
  Promise.resolve("Еще один Выполнен"),
]).then(function (res) {
  console.log(res);
});
