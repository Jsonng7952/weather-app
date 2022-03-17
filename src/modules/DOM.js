import WeatherAPI from "./WeatherAPI";

class DOM {
  static searchWeather() {
    const searchResult = document.querySelector('.search-location');
    const searchBtn = document.querySelector('.search-button');
    searchBtn.addEventListener('click', () => this.changeWeather(searchResult.value));
  }

  static async changeWeather(placeName) {

    const weatherInfo = await WeatherAPI.getAllWeather(placeName);
    console.log(weatherInfo);

    document.querySelector('.current-location').textContent = `${weatherInfo.locationName}`;
    document.querySelector('.current-temperature').textContent = `${weatherInfo.fahrenheit}°F`;
    document.querySelector('.current-weather-info').textContent = `${weatherInfo.weatherMain}`;
    document.querySelector('.current-high').textContent = `H: ${weatherInfo.fahrenheitHigh}°F`;
    document.querySelector('.current-low').textContent = `L: ${weatherInfo.fahrenheitLow}°F`;

    let counter = 0;
    document.querySelectorAll('.hourly-weather').forEach(element => {
      element.childNodes[0].textContent = (new Date(weatherInfo.hourlyData[counter].dt * 1000)).toLocaleTimeString();
      element.childNodes[1].src = `http://openweathermap.org/img/wn/${weatherInfo.hourlyData[counter].weather[0].icon}@2x.png`;
      element.childNodes[2].textContent = `${Math.round(1.8 * (weatherInfo.hourlyData[counter].temp - 273.15) + 32)}°F`;
      counter++;
    });

    counter = 0;
    document.querySelectorAll('.weekly-weather').forEach(element => {
      element.childNodes[0].textContent = (new Date(weatherInfo.weeklyData[counter].dt * 1000)).toLocaleDateString('en-US',{weekday: 'long'});
      element.childNodes[1].src =  `http://openweathermap.org/img/wn/${weatherInfo.weeklyData[counter].weather[0].icon}@2x.png`;
      element.childNodes[2].childNodes[0].textContent = `${Math.round(1.8 * (weatherInfo.weeklyData[counter].temp.min - 273.15) + 32)}°F`;
      element.childNodes[2].childNodes[1].textContent = `${Math.round(1.8 * (weatherInfo.weeklyData[counter].temp.day - 273.15) + 32)}°F`;
      element.childNodes[2].childNodes[2].textContent = `${Math.round(1.8 * (weatherInfo.weeklyData[counter].temp.max - 273.15) + 32)}°F`;
      counter++;
    });
  }
}

export default DOM;