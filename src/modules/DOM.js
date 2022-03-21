import WeatherAPI from "./WeatherAPI";

class DOM {

  static weatherInfo;
  static currentMetric = 'f';

  static searchWeather() {
    const searchResult = document.querySelector('.search-location');
    const searchBtn = document.querySelector('.search-button');
    searchResult.addEventListener('keyup', (e) => this.keyPress(e, searchResult.value));
    searchBtn.addEventListener('click', () => this.changeWeather(searchResult.value));
  }

  static keyPress(e, placeName) {
    if(e.keyCode === 13 && placeName !== '') {
      this.changeWeather(placeName);
    }
  }

  static clickTemperatureMetric() {
    const temperatureMetric = document.querySelector('.temperature-metric');
    temperatureMetric.addEventListener('click', () => this.changeTemperatureMetric());
  }
  
  // Change the metrics based on the current selected metric.
  static changeTemperatureMetric() {
    if(this.currentMetric === 'f') {
      document.querySelector('.current-temperature').textContent = `${this.weatherInfo.celcius}°C`;
      document.querySelector('.current-high').textContent = `H: ${this.weatherInfo.celciusHigh}°C`;
      document.querySelector('.current-low').textContent = `L: ${this.weatherInfo.celciusLow}°C`;
  
      let counter = 0;
      document.querySelectorAll('.hourly-weather').forEach(element => {
        element.childNodes[2].textContent = `${Math.round(this.weatherInfo.hourlyData[counter].temp - 273.15)}°C`;
        counter++;
      });
  
      counter = 0;
      document.querySelectorAll('.weekly-weather').forEach(element => {
        element.childNodes[2].childNodes[0].textContent = `${Math.round(this.weatherInfo.weeklyData[counter].temp.min - 273.15)}°C`;
        element.childNodes[2].childNodes[1].textContent = `${Math.round(this.weatherInfo.weeklyData[counter].temp.day - 273.15)}°C`;
        element.childNodes[2].childNodes[2].textContent = `${Math.round(this.weatherInfo.weeklyData[counter].temp.max - 273.15)}°C`;
        counter++;
      });

      this.currentMetric = 'c';
    }
    else if(this.currentMetric === 'c') {
      document.querySelector('.current-temperature').textContent = `${this.weatherInfo.fahrenheit}°F`;
      document.querySelector('.current-high').textContent = `H: ${this.weatherInfo.fahrenheitHigh}°F`;
      document.querySelector('.current-low').textContent = `L: ${this.weatherInfo.fahrenheitLow}°F`;
  
      let counter = 0;
      document.querySelectorAll('.hourly-weather').forEach(element => {
        element.childNodes[2].textContent = `${Math.round(1.8 * (this.weatherInfo.hourlyData[counter].temp - 273.15) + 32)}°F`;
        counter++;
      });
  
      counter = 0;
      document.querySelectorAll('.weekly-weather').forEach(element => {
        element.childNodes[2].childNodes[0].textContent = `${Math.round(1.8 * (this.weatherInfo.weeklyData[counter].temp.min - 273.15) + 32)}°F`;
        element.childNodes[2].childNodes[1].textContent = `${Math.round(1.8 * (this.weatherInfo.weeklyData[counter].temp.day - 273.15) + 32)}°F`;
        element.childNodes[2].childNodes[2].textContent = `${Math.round(1.8 * (this.weatherInfo.weeklyData[counter].temp.max - 273.15) + 32)}°F`;
        counter++;
      });

      this.currentMetric = 'f';
    }
  }

  // Change weather according to the current metric.
  static async changeWeather(placeName) {
    this.weatherInfo = await WeatherAPI.getAllWeather(placeName);
    console.log(this.weatherInfo);

    if(this.currentMetric === 'f') {
      document.querySelector('.current-location').textContent = `${this.weatherInfo.locationName}`;
      document.querySelector('.current-temperature').textContent = `${this.weatherInfo.fahrenheit}°F`;
      document.querySelector('.current-weather-info').textContent = `${this.weatherInfo.weatherMain}`;
      document.querySelector('.current-high').textContent = `H: ${this.weatherInfo.fahrenheitHigh}°F`;
      document.querySelector('.current-low').textContent = `L: ${this.weatherInfo.fahrenheitLow}°F`;

      let counter = 0;
      document.querySelectorAll('.hourly-weather').forEach(element => {
        element.childNodes[0].textContent = (new Date(this.weatherInfo.hourlyData[counter].dt * 1000)).toLocaleTimeString();
        element.childNodes[1].src = `http://openweathermap.org/img/wn/${this.weatherInfo.hourlyData[counter].weather[0].icon}@2x.png`;
        element.childNodes[2].textContent = `${Math.round(1.8 * (this.weatherInfo.hourlyData[counter].temp - 273.15) + 32)}°F`;
        counter++;
      });

      counter = 0;
      document.querySelectorAll('.weekly-weather').forEach(element => {
        element.childNodes[0].textContent = (new Date(this.weatherInfo.weeklyData[counter].dt * 1000)).toLocaleDateString('en-US',{weekday: 'long'});
        element.childNodes[1].src =  `http://openweathermap.org/img/wn/${this.weatherInfo.weeklyData[counter].weather[0].icon}@2x.png`;
        element.childNodes[2].childNodes[0].textContent = `${Math.round(1.8 * (this.weatherInfo.weeklyData[counter].temp.min - 273.15) + 32)}°F`;
        element.childNodes[2].childNodes[1].textContent = `${Math.round(1.8 * (this.weatherInfo.weeklyData[counter].temp.day - 273.15) + 32)}°F`;
        element.childNodes[2].childNodes[2].textContent = `${Math.round(1.8 * (this.weatherInfo.weeklyData[counter].temp.max - 273.15) + 32)}°F`;
        counter++;
      });      
    }
    else if(this.currentMetric === 'c') {
      document.querySelector('.current-location').textContent = `${this.weatherInfo.locationName}`;
      document.querySelector('.current-temperature').textContent = `${this.weatherInfo.celcius}°C`;
      document.querySelector('.current-weather-info').textContent = `${this.weatherInfo.weatherMain}`;
      document.querySelector('.current-high').textContent = `H: ${this.weatherInfo.celciusHigh}°C`;
      document.querySelector('.current-low').textContent = `L: ${this.weatherInfo.celciusLow}°C`;
  
      let counter = 0;
      document.querySelectorAll('.hourly-weather').forEach(element => {
        element.childNodes[0].textContent = (new Date(this.weatherInfo.hourlyData[counter].dt * 1000)).toLocaleTimeString();
        element.childNodes[1].src = `http://openweathermap.org/img/wn/${this.weatherInfo.hourlyData[counter].weather[0].icon}@2x.png`;
        element.childNodes[2].textContent = `${Math.round(this.weatherInfo.hourlyData[counter].temp - 273.15)}°C`;
        counter++;
      });
  
      counter = 0;
      document.querySelectorAll('.weekly-weather').forEach(element => {
        element.childNodes[0].textContent = (new Date(this.weatherInfo.weeklyData[counter].dt * 1000)).toLocaleDateString('en-US',{weekday: 'long'});
        element.childNodes[1].src =  `http://openweathermap.org/img/wn/${this.weatherInfo.weeklyData[counter].weather[0].icon}@2x.png`;
        element.childNodes[2].childNodes[0].textContent = `${Math.round(this.weatherInfo.weeklyData[counter].temp.min - 273.15)}°C`;
        element.childNodes[2].childNodes[1].textContent = `${Math.round(this.weatherInfo.weeklyData[counter].temp.day - 273.15)}°C`;
        element.childNodes[2].childNodes[2].textContent = `${Math.round(this.weatherInfo.weeklyData[counter].temp.max - 273.15)}°C`;
        counter++;
      });
    }

  }


}

export default DOM;