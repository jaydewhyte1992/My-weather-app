function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temp-now");
  let temperature = Math.round(response.data.temperature.current);
  let currentCityElement = document.querySelector(".current-city h1");
  currentCityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector(".search-input");
  let currentCityElement = document.querySelector(".current-city h1");
  let city = searchInputElement.value;
  let apiKey = "dec30ab936f6fe43ot4b0dead25ade10";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}

let form = document.querySelector("form");
form.addEventListener("submit", search);

function formatDate() {
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let formattedDay = days[now.getDay()];

  let hours = now.getHours();
  let minutes = now.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  return `${formattedDay} ${hours}:${minutes}`;
}

let currentTime = document.querySelector(".current-date");
currentTime.innerHTML = formatDate();
