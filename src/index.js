import './style.css';

const key;

async function getLocationData(placeName) {
  const location = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${placeName}&limit=5&appid=${key}`, {mode: 'cors'});
  const locationData = await location.json();
  const lat = locationData[0].lat;
  const lon = locationData[0].lon;
  console.log(locationData);
  console.log(lat, lon);

  getCurrentWeather(lat, lon);
}

async function getCurrentWeather(lat, lon) {

  const currentWeather = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`, {mode: 'cors'});
  const weatherData = await currentWeather.json();
  console.log(weatherData);

}
getLocationData('New York');
