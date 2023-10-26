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
  const request = fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      renderCards(data[0], className);
      const neighbour = data[0].borders[0];
      console.log(neighbour);

      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then((response) => {
      return response.json();
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
// gatRenderCountry("brazil");
