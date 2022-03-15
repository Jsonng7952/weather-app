import './style.css';
import UI from './modules/UI'

const key = '';

async function getLocationData(placeName) {
  const location = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${placeName}&limit=5&appid=${key}`, {mode: 'cors'});
  const locationData = await location.json();
  const lat = locationData[0].lat;
  const lon = locationData[0].lon;
  console.log(locationData);
  console.log(lat, lon);

  getCurrentWeather(lat, lon);

  //getAllWeather(lat, lon);
}

async function getCurrentWeather(lat, lon) {

  const currentWeather = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`, {mode: 'cors'});
  const weatherData = await currentWeather.json();
  console.log(weatherData);

  // Name
  console.log(weatherData.name);
  document.querySelector('.current-location').textContent = `${weatherData.name}`;

  // Fahrenheit, F = 1.8 * (K - 273.15) + 32
  const fahrenheit = Math.round(1.8 * (weatherData.main.temp - 273.15) + 32);
  document.querySelector('.current-temperature').textContent = `${fahrenheit}°F`;

  // Celcius,    C = K - 273.15
  const celcius = Math.round(weatherData.main.temp - 273.15);
  console.log(`${fahrenheit}°F`, `${celcius}°C`);

  // Weather
  console.log(weatherData.weather[0].main, weatherData.weather[0].description);
  document.querySelector('.current-weather-info').textContent = `${weatherData.weather[0].main}`;

  // High and Low
  const fahrenheitHigh = Math.round(1.8 * (weatherData.main.temp_max - 273.15) + 32);
  const fahrenheitLow = Math.round(1.8 * (weatherData.main.temp_min - 273.15) + 32);
  const celciusHigh = Math.round(weatherData.main.temp_max - 273.15);
  const celciusLow = Math.round(weatherData.main.temp_min - 273.15);
  console.log(fahrenheitHigh, fahrenheitLow);
  console.log(celciusHigh, celciusLow);
  document.querySelector('.current-high').textContent = `H: ${fahrenheitHigh}°F`;
  document.querySelector('.current-low').textContent = `L: ${fahrenheitLow}°F`;
}

async function getAllWeather(lat, lon) {
  const allWeather = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=${key}`, {mode: 'cors'});
  const weatherData = await allWeather.json();

  console.log(weatherData);
}

document.body.append(UI.header());
document.body.append(UI.content());
document.getElementById('content').appendChild(UI.searchBar());
document.getElementById('content').appendChild(UI.currentWeather());

getLocationData('new york');

const searchResult = document.querySelector('.search-location');
const searchBtn = document.querySelector('.search-button');
searchBtn.addEventListener('click', () => getLocationData(searchResult.value));
