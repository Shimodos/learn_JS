"use strict";

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");
const buttonReset = document.querySelector(".btn__reset");

class Workout {
  date = new Date();
  id = (Date.now() + "").slice(-10);
  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }
  _setDescription() {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]; // Массив месяцев
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }
}

class Running extends Workout {
  type = "running";
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace(); // Вызов метода в конструкторе
    this._setDescription();
  }

  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = "cycling";
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed(); // Вызов метода в конструкторе
    this._setDescription();
  }

  calcSpeed() {
    // km/h
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

class App {
  _workouts = [];
  _map;
  _mapEvent;

  // Запуск приложения
  constructor() {
    this._getPosition();

    // Получение данных из local storage
    this._getLocalStorage();

    // Обработчики событий на форме
    form.addEventListener("submit", this._newWorkout.bind(this));

    // Обработчик события на поле выбора типа тренировки
    inputType.addEventListener("change", this._toggleElevationField.bind(this));
    containerWorkouts.addEventListener("click", this._moveToPopup.bind(this));
  }

  // Получение координат пользователя
  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),

        function () {
          alert("Could not get your position");
        },
      );
  }

  // Загрузка карты на страницу и отображение ее
  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    const coords = [latitude, longitude];

    this._map = L.map("map").setView(coords, 13);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this._map);

    this._map.on("click", this._showForm.bind(this));

    this._workouts.forEach((work) => {
      this._renderWorkoutMarker(work);
    });
  }

  // Отображение формы на карте
  _showForm(mapE) {
    this._mapEvent = mapE;
    form.classList.remove("hidden");
    inputDistance.focus();
  }

  // Скрытие формы на карте
  _toggleElevationField() {
    inputElevation.closest(".form__row").classList.toggle("form__row--hidden"); // удаляет класс если он есть и добавляет если его нет
    inputCadence.closest(".form__row").classList.toggle("form__row--hidden"); // удаляет класс если он есть и добавляет если его нет
  }

  _getReset() {
    buttonReset.addEventListener("click", this.reset.bind(this));
  }

  // Создание новой тренировки
  _newWorkout(e) {
    e.preventDefault();

    const validInputs = (...inputs) =>
      inputs.every((inp) => Number.isFinite(inp));
    const allPositiv = (...inputs) => inputs.every((inp) => inp > 0);

    // Полуение данных из формы
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this._mapEvent.latlng;
    let workouts;

    if (type === "running") {
      const cadence = +inputCadence.value;
      // Проверка данных на валидность
      if (
        !validInputs(distance, duration, cadence) ||
        !allPositiv(distance, duration, cadence)
      ) {
        return alert("Input positive number");
      }
      workouts = new Running([lat, lng], distance, duration, cadence);
    }

    if (type === "cycling") {
      const elevation = +inputElevation.value;
      // Проверка данных на валидность
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositiv(distance, duration)
      ) {
        return alert("Input positive number");
      }
      workouts = new Cycling([lat, lng], distance, duration, duration);
    }

    this._workouts.push(workouts);
    console.log(this._workouts);

    // Проверка данных на валидность

    // Если данные валидны, то создаем объект тренировки бега

    // Если данные валидны, то создаем объект тренировки велосипеда

    // Добавляем новую тренировку в массив тренировок

    // Рендер маркера тренировку на карте
    this._renderWorkoutMarker(workouts);

    // Рендер списка тренировок
    this._renderWorkoutList(workouts);

    // Очистка поля ввода и скрытие формы
    this._hideForm();

    // Сохранение в local storage
    this._setLocalStorage();

    // Сброс всех данных
    this._getReset();
  }

  _renderWorkoutMarker(workout) {
    L.marker(workout.coords, { draggable: true })
      .addTo(this._map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: true,
          // closeOnClick: false,
          className: "mark-popup",
        }),
      )
      .setPopupContent(
        `${workout.type === "running" ? "🏃‍♂️" : "🚴‍♀️"} ${workout.description}`,
      )
      .openPopup();
  }

  // Очистка поля ввода и скрытие формы
  _hideForm() {
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        "";
    form.style.display = "none";
    form.classList.add("hidden");
    setTimeout(() => (form.style.display = "grid"), 1000);
  }

  //  Рендер списка тренировок
  _renderWorkoutList(workout) {
    let html = `<li class="workout workout--${workout.type}" data-id="${
      workout.id
    }">
    <h2 class="workout__title">${workout.description}</h2>
    <div class="workout__details">
      <span class="workout__icon">${
        workout.type === "running" ? "🏃‍♂️" : "🚴‍♀️"
      }</span>
      <span class="workout__value">${workout.distance}</span>
      <span class="workout__unit">км</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⏱</span>
      <span class="workout__value">${workout.duration}</span>
      <span class="workout__unit">мин</span>
    </div>`;

    if (workout.type === "running") {
      html += `<div class="workout__details">
      <span class="workout__icon">⚡️</span>
      <span class="workout__value">${workout.pace.toFixed(1)}</span>
      <span class="workout__unit">мин/км</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">🦶🏼</span>
      <span class="workout__value">${workout.cadence}</span>
      <span class="workout__unit">кад/км</span>
    </div>
  </li>`;
    }

    if (workout.type === "cycling") {
      html += `<div class="workout__details">
    <span class="workout__icon">⚡️</span>
    <span class="workout__value">${workout.speed.toFixed(1)}</span>
    <span class="workout__unit">км/ч</span>
  </div>
  <div class="workout__details">
    <span class="workout__icon">⛰</span>
    <span class="workout__value">${workout.elevationGain}</span>
    <span class="workout__unit">м</span>
  </div>
  </li>`;
    }
    form.insertAdjacentHTML("afterend", html);
  }
  _moveToPopup(e) {
    const workoutEl = e.target.closest(".workout");
    console.log(workoutEl);

    if (!workoutEl) return;

    const workout = this._workouts.find(
      (work) => work.id === workoutEl.dataset.id,
    );

    this._map.setView(workout.coords, 13, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
  }
  _setLocalStorage() {
    localStorage.setItem("workouts", JSON.stringify(this._workouts));
  }

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem("workouts"));

    if (!data) return;

    this._workouts = data;

    this._workouts.forEach((work) => {
      this._renderWorkoutList(work);
    });
  }

  reset() {
    localStorage.removeItem("workouts");
    location.reload();
  }
}

const app = new App();
