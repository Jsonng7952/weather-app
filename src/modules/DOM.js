import WeatherAPI from "./WeatherAPI";

class DOM {
  static searchWeather() {
    const searchResult = document.querySelector('.search-location');
    const searchBtn = document.querySelector('.search-button');
    searchBtn.addEventListener('click', () => this.changeCurrentWeather(searchResult.value));
  }

  static async changeCurrentWeather(placeName) {

    const weatherInfo = await WeatherAPI.getCurrentWeather(placeName);

    document.querySelector('.current-location').textContent = `${weatherInfo.locationName}`;
    document.querySelector('.current-temperature').textContent = `${weatherInfo.fahrenheit}°F`;
    document.querySelector('.current-weather-info').textContent = `${weatherInfo.weatherMain}`;
    document.querySelector('.current-high').textContent = `H: ${weatherInfo.fahrenheitHigh}°F`;
    document.querySelector('.current-low').textContent = `L: ${weatherInfo.fahrenheitLow}°F`;
  }
}

export default DOM;