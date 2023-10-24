"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

const request = new XMLHttpRequest(); // старый способ создания запроса на сервер (XMLHttpRequest)
request.open("GET", "https://meowfacts.herokuapp.com/?count=3");

request.send(); // отправка запроса на сервер

request.addEventListener("load", function () {
  const data = JSON.parse(this.responseText);
  console.log(data);
  const [text] = data.data;
  console.log(text);
});

console.log(request);
