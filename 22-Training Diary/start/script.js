"use strict";

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
];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

class Workout {
  date = new Date();
  id = (Date.now() + "").slice(-10);
  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }
}

class Running extends Workout {
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace(); // Вызов метода в конструкторе
  }

  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed(); // Вызов метода в конструкторе
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

  constructor() {
    this._getPosition();

    form.addEventListener("submit", this._newWorkout.bind(this));

    inputType.addEventListener("change", this._toggleElevationField.bind(this));
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
    this.renderWorkoutMarker(workouts);
  }
  renderWorkoutMarker(workout) {
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
      .setPopupContent("workout.distance")
      .openPopup();
  }

  // Очистка поля ввода и скрытие формы

  // inputDistance.value =
  //   inputDuration.value =
  //   inputCadence.value =
  //   inputElevation.value =
  //     "";

  //  Рендер списка тренировок
}

const app = new App();
app._getPosition;
