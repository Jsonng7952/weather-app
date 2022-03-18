class WeatherAPI {
  static key = '5f070dc6134892e08bafa2d8888b94ef';

  static async getLocationData(placeName) {
    const location = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${placeName}&limit=5&appid=${this.key}`, {mode: 'cors'});
    const locationData = await location.json();
    const lat = locationData[0].lat;
    const lon = locationData[0].lon;

    return {lat, lon};
  }

  static async getAllWeather(placeName) {
    const {lat, lon} = await this.getLocationData(placeName);

    const currentWeather = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.key}`, {mode: 'cors'});
    const weatherData = await currentWeather.json();

    // Name
    const locationName = weatherData.name;

    // Fahrenheit, F = 1.8 * (K - 273.15) + 32
    const fahrenheit = Math.round(1.8 * (weatherData.main.temp - 273.15) + 32);

    // Celcius,    C = K - 273.15
    const celcius = Math.round(weatherData.main.temp - 273.15);

    // Weather
    const weatherMain = weatherData.weather[0].main;
    const weatherDescription = weatherData.weather[0].description;

    // High and Low
    const fahrenheitHigh = Math.round(1.8 * (weatherData.main.temp_max - 273.15) + 32);
    const fahrenheitLow = Math.round(1.8 * (weatherData.main.temp_min - 273.15) + 32);
    const celciusHigh = Math.round(weatherData.main.temp_max - 273.15);
    const celciusLow = Math.round(weatherData.main.temp_min - 273.15);
  
    console.log({locationName, fahrenheit, celcius, weatherMain, weatherDescription, fahrenheitHigh, fahrenheitLow, celciusHigh, celciusLow})

    const allWeather = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,alerts&appid=${this.key}`, {mode: 'cors'});
    const allWeatherData = await allWeather.json();
    console.log(allWeatherData);

    const hourlyData = allWeatherData.hourly.slice(0, 25);
    const weeklyData = allWeatherData.daily;

    return {locationName, fahrenheit, celcius, weatherMain, weatherDescription, fahrenheitHigh, fahrenheitLow, celciusHigh, celciusLow, hourlyData, weeklyData};
  }
}



export default WeatherAPI;